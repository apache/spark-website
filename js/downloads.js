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
var hadoopFree = {pretty: "Pre-build with user-provided Apache Hadoop", tag: "without-hadoop"};
var hadoop2p6 = {pretty: "Pre-built for Apache Hadoop 2.6", tag: "hadoop2.6"};
var hadoop2p7 = {pretty: "Pre-built for Apache Hadoop 2.7 and later", tag: "hadoop2.7"};
var scala2p12_hadoopFree = {pretty: "[Experimental] Pre-build with Scala 2.12 and user-provided Apache Hadoop", tag: "without-hadoop-scala-2.12"};

// 2.2.0+
var packagesV8 = [hadoop2p7, hadoop2p6, hadoopFree, sources];
// 2.4.0+
var packagesV9 = [hadoop2p7, hadoop2p6, hadoopFree, scala2p12_hadoopFree, sources];

addRelease("2.4.0", new Date("11/02/2018"), packagesV9, true);
addRelease("2.3.2", new Date("09/24/2018"), packagesV8, true);
addRelease("2.2.3", new Date("01/11/2019"), packagesV8, true);

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

  append(versionSelect, "<optgroup label=\"Stable\">");
  for (var version in releases) {
    var releaseDate = releases[version].released;
    var title = versionShort(version) + " (" + releaseDate.toDateString().slice(4) + ")";
    append(versionSelect, "<option value=\"" + version + "\">" + title + "</option>");
  }
  append(versionSelect, "</optgroup>");

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
    append(releaseNotes, contents);
  }
}

function onPackageSelect() {
  updateDownloadLink();
}

function onVersionSelect() {
  var versionSelect = document.getElementById("sparkVersionSelect");
  var packageSelect = document.getElementById("sparkPackageSelect");
  var verifyLink = document.getElementById("sparkDownloadVerify");

  empty(packageSelect);
  empty(verifyLink);

  var version = getSelectedValue(versionSelect);
  var packages = releases[version]["packages"];
  for (var idx in packages) {
    var option = "<option value=$tag> $pretty </option>"
      .replace(/\$tag/, packages[idx].tag)
      .replace(/\$pretty/, packages[idx].pretty);
    append(packageSelect, option);
  }

  var href = "https://archive.apache.org/dist/spark/spark-" + version + "/";
  var link = "<a href=\"" + href + "\">" + versionShort(version) + " signatures and checksums</a>";
  append(verifyLink, link);

  // Populate releases
  updateDownloadLink(releases[version].mirrored);
}

function updateDownloadLink(isMirrored) {
  var versionSelect = document.getElementById("sparkVersionSelect");
  var packageSelect = document.getElementById("sparkPackageSelect");
  var downloadLink = document.getElementById("spanDownloadLink");

  empty(downloadLink);

  var version = getSelectedValue(versionSelect);
  var pkg = getSelectedValue(packageSelect);

  var artifactName = "spark-$ver-bin-$pkg.tgz"
    .replace(/\$ver/g, version)
    .replace(/\$pkg/g, pkg)
    .replace(/-bin-sources/, ""); // special case for source packages

  var link = "";
  if (isMirrored) {
    link = "https://www.apache.org/dyn/closer.lua/spark/spark-$ver/$artifact";
  } else {
    link = "https://archive.apache.org/dist/spark/spark-$ver/$artifact";
  }
  link = link
    .replace(/\$ver/, version)
    .replace(/\$artifact/, artifactName);
  var text = link.split("/").reverse()[0];

  var onClick =
    "trackOutboundLink(this, 'Release Download Links', 'apache_$artifact'); return false;"
    .replace(/\$artifact/, artifactName);

  var contents = "<a href=\"" + link + "\" onClick=\"" + onClick + "\">" + text + "</a>";
  append(downloadLink, contents);
}
