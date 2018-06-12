// Script for generating Spark download links
// No dependencies; pure javascript.

releases = {};

function addRelease(version, releaseDate, packages, stable, mirrored) {
  releases[version] = {
    released: releaseDate,
    packages: packages,
    stable: stable,
    mirrored: mirrored
  };
}

var sources = {pretty: "Source Code", tag: "sources"};
var hadoopFree = {pretty: "Pre-build with user-provided Apache Hadoop", tag: "without-hadoop"};
var hadoop1 = {pretty: "Pre-built for Apache Hadoop 1.X", tag: "hadoop1"};
var cdh4 = {pretty: "Pre-built for CDH 4", tag: "cdh4"};
//var hadoop2 = {pretty: "Pre-built for Apache Hadoop 2.2", tag: "hadoop2"};
var hadoop2p3 = {pretty: "Pre-built for Apache Hadoop 2.3", tag: "hadoop2.3"};
var hadoop2p4 = {pretty: "Pre-built for Apache Hadoop 2.4", tag: "hadoop2.4"};
var hadoop2p6 = {pretty: "Pre-built for Apache Hadoop 2.6", tag: "hadoop2.6"};
var hadoop2p7 = {pretty: "Pre-built for Apache Hadoop 2.7 and later", tag: "hadoop2.7"};

// 1.4.0+
var packagesV6 = [hadoop2p6, hadoop2p4, hadoop2p3, hadoopFree, hadoop1, cdh4, sources];
// 2.0.0+
var packagesV7 = [hadoop2p7, hadoop2p6, hadoop2p4, hadoop2p3, hadoopFree, sources];
// 2.2.0+
var packagesV8 = [hadoop2p7, hadoop2p6, hadoopFree, sources];

addRelease("2.3.1", new Date("06/08/2018"), packagesV8, true, true);
addRelease("2.3.0", new Date("02/28/2018"), packagesV8, true, true);
addRelease("2.2.1", new Date("12/01/2017"), packagesV8, true, true);
addRelease("2.2.0", new Date("07/11/2017"), packagesV8, true, false);
addRelease("2.1.2", new Date("10/09/2017"), packagesV7, true, true);
addRelease("2.1.1", new Date("05/02/2017"), packagesV7, true, false);
addRelease("2.1.0", new Date("12/28/2016"), packagesV7, true, false);
addRelease("2.0.2", new Date("11/14/2016"), packagesV7, true, true);
addRelease("2.0.1", new Date("10/03/2016"), packagesV7, true, false);
addRelease("2.0.0", new Date("07/26/2016"), packagesV7, true, false);
//addRelease("2.0.0-preview", new Date("05/24/2016"), sources.concat(packagesV7), true, false);
addRelease("1.6.3", new Date("11/07/2016"), packagesV6, true, true);
addRelease("1.6.2", new Date("06/25/2016"), packagesV6, true, false);
addRelease("1.6.1", new Date("03/09/2016"), packagesV6, true, false);
addRelease("1.6.0", new Date("01/04/2016"), packagesV6, true, false);

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

  // Populate stable versions
  append(versionSelect, "<optgroup label=\"Stable\">");
  for (var version in releases) {
    if (releases[version].stable) {
      var releaseDate = releases[version].released;
      var title = versionShort(version) + " (" + releaseDate.toDateString().slice(4) + ")";
      append(versionSelect, "<option value=\"" + version + "\">" + title + "</option>");
    }
  }
  append(versionSelect, "</optgroup>");

  // Populate other versions
  // append(versionSelect, "<optgroup label=\"Preview\">");
  //for (var version in releases) {
  //  if (!releases[version].stable) {
  //    var releaseDate = releases[version].released;
  //    var title = versionShort(version) + " (" + releaseDate.toDateString().slice(4) + ")";
  //    append(versionSelect, "<option value=\"" + version + "\">" + title + "</option>");
  //  }
  //}
  //append(versionSelect, "</optgroup>");

  // Populate packages and (transitively) releases
  onVersionSelect();
}

function initReleaseNotes() {
  var releaseNotes = document.getElementById("sparkReleaseNotes");
  for (var version in releases) {
    if (!releases[version].stable) { continue; }
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
