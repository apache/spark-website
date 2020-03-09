// Script for generating Spark download links
// No dependencies; pure javascript.

releases = {};

function addRelease(version, releaseDate, packages, mirrored) {
  releases[version] = {
    released: releaseDate,
    packages: packages,
    mirrored: mirrored
  };
}

var sources = {pretty: "Source Code", tag: "sources"};
var hadoopFree = {pretty: "Pre-built with user-provided Apache Hadoop", tag: "without-hadoop"};
var hadoop2p6 = {pretty: "Pre-built for Apache Hadoop 2.6", tag: "hadoop2.6"};
var hadoop2p7 = {pretty: "Pre-built for Apache Hadoop 2.7", tag: "hadoop2.7"};
var hadoop3p2 = {pretty: "Pre-built for Apache Hadoop 3.2 and later", tag: "hadoop3.2"};
var scala2p12_hadoopFree = {pretty: "Pre-built with Scala 2.12 and user-provided Apache Hadoop", tag: "without-hadoop-scala-2.12"};

// 2.4.0+
var packagesV9 = [hadoop2p7, hadoop2p6, hadoopFree, scala2p12_hadoopFree, sources];
// 3.0.0+
var packagesV10 = [hadoop2p7, hadoop3p2, hadoopFree, sources];

addRelease("3.0.0-preview2", new Date("12/23/2019"), packagesV10, true);
addRelease("2.4.5", new Date("02/05/2020"), packagesV9, true);

function append(el, contents) {
  el.innerHTML += contents;
}

function empty(el) {
  el.innerHTML = "";
}

function getSelectedValue(selectEl) {
  return selectEl.options[selectEl.selectedIndex].value;
}

function versionShort(version) { return version.replace(/-incubating/, ""); }

function initDownloads() {
  var versionSelect = document.getElementById("sparkVersionSelect");

  for (var version in releases) {
    var releaseDate = releases[version].released;
    var title = versionShort(version) + " (" + releaseDate.toDateString().slice(4) + ")";
    append(versionSelect, "<option value=\"" + version + "\">" + title + "</option>");
  }

  onVersionSelect();
}

function initReleaseNotes() {
  var releaseNotes = document.getElementById("sparkReleaseNotes");
  for (var version in releases) {
    var releaseDate = releases[version].released;
    var verShort = versionShort(version);
    var contents = "<li><a href='releases/spark-release-$verUrl.html'>Spark $ver</a> ($date)</li>"
      .replace(/\$verUrl/, verShort.replace(/\./g, "-"))
      .replace(/\$ver/, verShort)
      .replace(/\$date/, releaseDate.toDateString().slice(4));
    if (!version.endsWith("preview")) {
      append(releaseNotes, contents);
    }
  }
}

function onPackageSelect() {
  updateDownloadLink();
}

function onVersionSelect() {
  var versionSelect = document.getElementById("sparkVersionSelect");
  var packageSelect = document.getElementById("sparkPackageSelect");

  empty(packageSelect);

  var version = getSelectedValue(versionSelect);
  var packages = releases[version]["packages"];
  for (var idx in packages) {
    var option = "<option value=$tag> $pretty </option>"
      .replace(/\$tag/, packages[idx].tag)
      .replace(/\$pretty/, packages[idx].pretty);
    append(packageSelect, option);
  }

  // Populate releases
  updateDownloadLink();
}

function updateDownloadLink() {
  var versionSelect = document.getElementById("sparkVersionSelect");
  var packageSelect = document.getElementById("sparkPackageSelect");
  var downloadLink = document.getElementById("spanDownloadLink");
  var verifyLink = document.getElementById("sparkDownloadVerify");

  empty(downloadLink);
  empty(verifyLink);

  var version = getSelectedValue(versionSelect);
  var pkg = getSelectedValue(packageSelect);

  var artifactName = "spark-" + version + "-bin-" + pkg + ".tgz"
  artifactName = artifactName.replace(/-bin-sources/, ""); // special case for source packages

  var downloadHref = "";
  if (releases[version].mirrored) {
    downloadHref = "https://www.apache.org/dyn/closer.lua/spark/spark-" + version + "/" + artifactName;
  } else {
    downloadHref = "https://archive.apache.org/dist/spark/spark-" + version + "/" + artifactName;
  }
  var text = downloadHref.split("/").reverse()[0];
  var onClick =
    "trackOutboundLink(this, 'Release Download Links', 'apache_" + artifactName + "'); return false;";
  var contents = "<a href=\"" + downloadHref + "\" onClick=\"" + onClick + "\">" + text + "</a>";
  append(downloadLink, contents);

  var sigHref = "https://downloads.apache.org/spark/spark-" + version + "/" + artifactName + ".asc";
  var checksumHref = "https://downloads.apache.org/spark/spark-" + version + "/" + artifactName + ".sha512";
  var verifyLinks = versionShort(version) + " <a href=\"" + sigHref + "\">signatures</a>, <a href=\"" +
    checksumHref + "\">checksums</a>";
  append(verifyLink, verifyLinks);
}
