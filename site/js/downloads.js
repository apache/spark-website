// Script for generating Spark download links
// No dependencies; pure javascript.

releases = {};

function addRelease(version, releaseDate, packages, stable) {
  releases[version] = {released: releaseDate, packages: packages, stable: stable};
}

var sources = {pretty: "Source Code", tag: "sources"};
var hadoopFree = {pretty: "Pre-build with user-provided Apache Hadoop", tag: "without-hadoop"};
var hadoop1 = {pretty: "Pre-built for Apache Hadoop 1.X", tag: "hadoop1"};
var cdh4 = {pretty: "Pre-built for CDH 4", tag: "cdh4"};
var hadoop2 = {pretty: "Pre-built for Apache Hadoop 2.2", tag: "hadoop2"};
var hadoop2p3 = {pretty: "Pre-built for Apache Hadoop 2.3", tag: "hadoop2.3"};
var hadoop2p4 = {pretty: "Pre-built for Apache Hadoop 2.4", tag: "hadoop2.4"};
var hadoop2p6 = {pretty: "Pre-built for Apache Hadoop 2.6", tag: "hadoop2.6"};
var hadoop2p7 = {pretty: "Pre-built for Apache Hadoop 2.7 and later", tag: "hadoop2.7"};

// 1.4.0+
var packagesV6 = [hadoop2p6, hadoop2p4, hadoop2p3, hadoopFree, hadoop1, cdh4, sources];
// 2.0.0+
var packagesV7 = [hadoop2p7, hadoop2p6, hadoop2p4, hadoop2p3, hadoopFree, sources];
// 2.2.0+
var packagesV8 = [hadoop2p7, hadoop2p6, hadoopFree, sources]

// addRelease("2.0.0-preview", new Date("05/24/2016"), sources.concat(packagesV7), true, false);

//addRelease("2.2.0", new Date("x/x/2017"), packagesV8, true);

addRelease("2.2.0", new Date("07/11/2017"), packagesV8, true);
addRelease("2.1.1", new Date("05/02/2017"), packagesV7, true);
addRelease("2.1.0", new Date("12/28/2016"), packagesV7, true);
addRelease("2.0.2", new Date("11/14/2016"), packagesV7, true);
addRelease("2.0.1", new Date("10/03/2016"), packagesV7, true);
addRelease("2.0.0", new Date("07/26/2016"), packagesV7, true);
addRelease("1.6.3", new Date("11/07/2016"), packagesV6, true);
addRelease("1.6.2", new Date("06/25/2016"), packagesV6, true);
addRelease("1.6.1", new Date("03/09/2016"), packagesV6, true);
addRelease("1.6.0", new Date("01/04/2016"), packagesV6, true);
addRelease("1.5.2", new Date("11/09/2015"), packagesV6, true);
addRelease("1.5.1", new Date("10/02/2015"), packagesV6, true);
addRelease("1.5.0", new Date("9/09/2015"), packagesV6, true);
addRelease("1.4.1", new Date("7/15/2015"), packagesV6, true);
addRelease("1.4.0", new Date("6/11/2015"), packagesV6, true);
// addRelease("1.3.1", new Date("4/17/2015"), packagesV5, true, true);
// addRelease("1.3.0", new Date("3/13/2015"), packagesV4, true, true);
// addRelease("1.2.2", new Date("4/17/2015"), packagesV4, true, true);
// addRelease("1.2.1", new Date("2/9/2015"), packagesV4, true, true);
// addRelease("1.2.0", new Date("12/18/2014"), packagesV4, true, true);
// addRelease("1.1.1", new Date("11/26/2014"), packagesV4, true, true);
// addRelease("1.1.0", new Date("9/11/2014"), packagesV4, true, true);
// addRelease("1.0.2", new Date("8/5/2014"), packagesV3, true, true);
// addRelease("1.0.1", new Date("7/11/2014"), packagesV3, false, true);
// addRelease("1.0.0", new Date("5/30/2014"), packagesV2, false, true);
// addRelease("0.9.2", new Date("7/23/2014"), packagesV2, true, true);
// addRelease("0.9.1", new Date("4/9/2014"), packagesV2, false, true);
// addRelease("0.9.0-incubating", new Date("2/2/2014"), packagesV2, false, true);
// addRelease("0.8.1-incubating", new Date("12/19/2013"), packagesV2, true, true);
// addRelease("0.8.0-incubating", new Date("9/25/2013"), packagesV1, true, true);
// addRelease("0.7.3", new Date("7/16/2013"), packagesV1, true, true);
// addRelease("0.7.2", new Date("2/6/2013"), packagesV1, false, true);
// addRelease("0.7.0", new Date("2/27/2013"), [sources], false, true);

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

  var href = "https://www.apache.org/dist/spark/spark-" + version + "/";
  var link = "<a href=\"" + href + "\">" + versionShort(version) + " signatures and checksums</a>";
  append(verifyLink, link);

  // Populate releases
  onPackageSelect();
  updateDownloadLink();
}

function onPackageSelect() {
  var downloadSelect = document.getElementById("sparkDownloadSelect");
  var packageSelect = document.getElementById("sparkPackageSelect");

  empty(downloadSelect);

  var pkg = getSelectedValue(packageSelect);

  append(downloadSelect, "<option value='direct'>Direct Download</option>");
  append(downloadSelect, "<option value='apache'>Select Apache Mirror</option>");
  updateDownloadLink();
}

function onDownloadSelect() {
  updateDownloadLink();
}

function updateDownloadLink() {
  var versionSelect = document.getElementById("sparkVersionSelect");
  var packageSelect = document.getElementById("sparkPackageSelect");
  var downloadSelect = document.getElementById("sparkDownloadSelect");
  var downloadLink = document.getElementById("spanDownloadLink");

  empty(downloadLink);

  var version = getSelectedValue(versionSelect);
  var pkg = getSelectedValue(packageSelect);
  var download = getSelectedValue(downloadSelect);


  var artifactName = "spark-$ver-bin-$pkg.tgz"
    .replace(/\$ver/g, version)
    .replace(/\$pkg/g, pkg)
    .replace(/-bin-sources/, ""); // special case for source packages

  var link = "https://d3kbcqa49mib13.cloudfront.net/$artifact";
  if (download == "apache") {
    if (version < "1.6.3" ||
        (version >= "2.0.0" && version <= "2.0.1") ||
        (version >= "2.1.0" && version <= "2.1.0")) {
      link = "https://archive.apache.org/dist/spark/spark-$ver/$artifact";
    } else {
      link = "https://www.apache.org/dyn/closer.lua/spark/spark-$ver/$artifact";
    }
  }
  link = link
    .replace(/\$ver/, version)
    .replace(/\$artifact/, artifactName);
  var text = link.split("/").reverse()[0];

  var onClick = "trackOutboundLink(this, 'Release Download Links', " +
    "'$download_$artifact'); return false;"
      .replace(/\$download/, download)
      .replace(/\$artifact/, artifactName);

  var contents = "<a href=\"" + link + "\" onClick=\"" + onClick + "\">" + text + "</a>";
  append(downloadLink, contents);
}
