# Apache Spark Main Website

This repository captures the main Apache Spark website located at https://spark.apache.org. The programming docs under https://spark.apache.org/docs/ are [in the main Spark repo][main], not here. They are built separately for each release of Spark and then copied to the website under the `docs/` directory.

[main]: https://github.com/apache/spark/tree/master/docs#readme

## Contributing

To contribute changes, submit a pull request with your Markdown source changes. You only need to commit changes to the Markdown source. A [GitHub Actions workflow](.github/workflows/html-push.yml) will generate the corresponding HTML under `site/` and push it for you.

The `site/` directory is tracked in git as a deployment artifact. To hide local changes to it from `git status` and `git diff`, run:

```sh
git ls-files -z site/ | xargs -0 git update-index --skip-worktree
```

To undo this, run the same command with `--no-skip-worktree` instead.

## Building the site locally

In this directory you will find text files formatted using Markdown, with an `.md` suffix.

Building the site requires [Ruby 3](https://www.ruby-lang.org), [Jekyll](http://jekyllrb.com/docs), and [Rouge](https://github.com/rouge-ruby/rouge).

```
gem install bundler -v 2.4.22
bundle install
bundle exec jekyll serve
```

### Building the site with Docker

The most reliable way to ensure a compatible environment is to use the official Docker build image from the Apache Spark repository.

If you haven't already, clone the [Apache Spark](https://github.com/apache/spark) repository. Navigate to
the Spark root directory and run the following command to create the builder image:
```
docker build \
  --tag docs-builder:latest \
  --file dev/spark-test-image/docs/Dockerfile \
  dev/spark-test-image-util/docs/
```

Once the image is built, navigate to the `spark-website` root directory, run the script which processes
the Markdown files in the Docker container.
```
.dev/build-docs.sh
```

## Deploying to production

The website is deployed automatically by [ASF Infra][infra]. The deployment configuration is tracked by [.asf.yaml](./.asf.yaml) and is [documented here][asf-docs].

One deployment detail that appears to be critical is the presence of the [`content`](./content/) symlink to `site/`. Even though ASF Infra is [aware of Jekyll][jek], we perhaps do not have the exact setup required for them to automatically use our [Jekyll config](./_config.yml) to understand where the site content lives. Without the `content` symlink, the website will just show a plain directory listing of the files in this repo.

[infra]: https://infra.apache.org
[asf-docs]: https://github.com/apache/infrastructure-asfyaml/tree/main?tab=readme-ov-file
[jek]: https://github.com/apache/infrastructure-asfyaml/tree/76d241ccef02e5397e10c173ebf04c07525311ea#jekyll_cms

## Merge PR

To merge a pull request, use the `merge_pr.py` script. This script also squashes the commits.
