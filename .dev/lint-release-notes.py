"""
Lint release notes under releases/_posts/ for common issues.
"""

import re
import sys
from dataclasses import dataclass
from datetime import date
from pathlib import Path

RELEASE_POSTS_DIR = Path(__file__).parent.parent / "releases" / "_posts"
FILENAME_RE = re.compile(
    r"^(?P<date>\d{4}-\d{2}-\d{2})-spark-release-(?P<version>.+)\.md$"
)


@dataclass(frozen=True)
class Version:
    major: int
    minor: int
    maintenance: int


def parse_date(date_str: str) -> date:
    return date.fromisoformat(date_str)


def parse_version(version: str) -> Version:
    parts = version.split("-")
    if len(parts) != 3:
        raise ValueError(f"Expected 3 parts, got {len(parts)}")
    major, minor, maintenance = (int(p) for p in parts)
    return Version(major, minor, maintenance)


def check_filename_format(name: str):
    m = FILENAME_RE.match(name)
    if not m:
        raise ValueError(
            "filename does not match expected pattern. "
            "Valid example: 2025-12-16-spark-release-4-1-0.md"
        )
    return m


def check_date_format(date_str: str) -> date:
    try:
        return parse_date(date_str)
    except ValueError:
        raise ValueError(
            f"date is not valid ISO format (YYYY-MM-DD). Valid example: 2025-12-16"
        )


def check_version_format(version_str: str) -> Version:
    try:
        return parse_version(version_str)
    except ValueError:
        raise ValueError(
            f"version '{version_str}' is malformed. Valid example: 4-1-0"
        )


def check_highlights(path: Path, version: Version) -> None:
    if version.maintenance == 0:
        content = path.read_text(encoding="utf-8")
        if not re.search(r"## .*Highlights\b", content, re.MULTILINE):
            raise ValueError(
                "major/minor release is missing a highlights heading. Add: ## Highlights"
            )


def lint_file(path: Path) -> list[str]:
    errors: list[str] = []
    name = path.name

    try:
        m = check_filename_format(name)
    except ValueError as e:
        errors.append(f"{name}: {e}")
        return errors

    try:
        release_date = check_date_format(m.group("date"))
    except ValueError as e:
        errors.append(f"{name}: {e}")
        return errors

    if release_date.year < 2025:
        return errors

    try:
        version = check_version_format(m.group("version"))
    except ValueError as e:
        errors.append(f"{name}: {e}")
        return errors

    try:
        check_highlights(path, version)
    except ValueError as e:
        errors.append(f"{name}: {e}")

    return errors


def test():
    import tempfile

    with tempfile.TemporaryDirectory() as tmpdir:
        # Bad filename format
        bad_name = Path(tmpdir) / "spark-release-1-0-0.md"
        bad_name.write_text("---\n---\n\n## Highlights\n")

        # Good file: 2025+ major/minor with highlights
        good_major_release = Path(tmpdir) / "2025-01-01-spark-release-1-0-0.md"
        good_major_release.write_text("---\n---\n\n## Highlights\nSome highlights here.\n")

        # Bad file: 2025+ major/minor without highlights
        bad_major_release = Path(tmpdir) / "2026-01-01-spark-release-1-0-0.md"
        bad_major_release.write_text("---\n---\n\nNo highlights here.\n")

        # Patch release: no highlights required
        good_maintenance_release = Path(tmpdir) / "2025-01-01-spark-release-1-0-1.md"
        good_maintenance_release.write_text("---\n---\n\nNo highlights required.\n")

        bad_name_errors = lint_file(bad_name)
        good_major_release_errors = lint_file(good_major_release)
        bad_major_release_errors = lint_file(bad_major_release)
        good_maintenance_release_errors = lint_file(good_maintenance_release)

        assert len(bad_name_errors) == 1, (
            f"Expected 1 error for bad filename, got {len(bad_name_errors)}: "
            f"{bad_name_errors}"
        )
        assert "filename does not match expected pattern" in bad_name_errors[0]
        assert good_major_release_errors == [], \
            f"Expected no errors for good file, got: {good_major_release_errors}"
        assert len(bad_major_release_errors) == 1, \
            "Expected 1 error for bad file, " \
            f"got {len(bad_major_release_errors)}: {bad_major_release_errors}"
        assert "highlights" in bad_major_release_errors[0].lower()
        assert good_maintenance_release_errors == [], \
            f"Expected no errors for patch file, got: {good_maintenance_release_errors}"


def main() -> int:
    all_errors: list[str] = []
    for path in sorted(RELEASE_POSTS_DIR.glob("*.md")):
        all_errors.extend(lint_file(path))
    if all_errors:
        for error in all_errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1
    print("All release notes passed linting.")
    return 0


if __name__ == "__main__":
    test()
    sys.exit(main())
