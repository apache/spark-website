---
layout: global
title: Downloads
type: singular
navigation:
  weight: 3
  show: true
---

## Download Spark
The latest release is Spark 1.0.1, released July 11, 2014 [(release notes)]({{site.url}}releases/spark-release-1-0-1.html) [(git tag)](https://git-wip-us.apache.org/repos/asf?p=spark.git;a=commit;h=7d1043c99303b87aef8ee19873629c2bfba4cc78)

Pre-built packages:

* For Hadoop 1 (HDP1, CDH3):
<a href="http://www.apache.org/dyn/closer.cgi/spark/spark-1.0.1/spark-1.0.1-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'apache_spark-1.0.1-bin-hadoop1.tgz'); return false;"> find an Apache mirror </a>
or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-hadoop1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1-bin-hadoop1.tgz'); return false;"> direct file download </a>
* For CDH4:
<a href="http://www.apache.org/dyn/closer.cgi/spark/spark-1.0.1/spark-1.0.1-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'apache_spark-1.0.1-bin-cdh4.tgz'); return false;"> find an Apache mirror </a>
or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-cdh4.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1-bin-cdh4.tgz'); return false;"> direct file download </a>
* For Hadoop 2 (HDP2, CDH5):
<a href="http://www.apache.org/dyn/closer.cgi/spark/spark-1.0.1/spark-1.0.1-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'apache_spark-1.0.1-bin-hadoop2.tgz'); return false;"> find an Apache mirror </a>
or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-hadoop2.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1-bin-hadoop2.tgz'); return false;"> direct file download </a>

Pre-built packages, third-party (NOTE: may include non ASF-compatible licenses):

 * For MapRv3: <a href="http://package.mapr.com/tools/apache-spark/1.0.1/spark-1.0.1-bin-mapr3.tgz" onClick="trackOutboundLink(this, 'Release Downlaod Links', 'mapr-v3_spark-1.0.1.tgz'); return false;">direct file download (external)</a>
 * For MapRv4: <a href="http://package.mapr.com/tools/apache-spark/1.0.1/spark-1.0.1-bin-mapr3.tgz" onClick="trackOutboundLink(this, 'Release Downlaod Links', 'mapr-v4_spark-1.0.1.tgz'); return false;">direct file download (external)</a>

Sources:
<a href="http://www.apache.org/dyn/closer.cgi/spark/spark-1.0.1/spark-1.0.1.tgz" onClick="trackOutboundLink(this, 'Release Downlaod Links', 'apache_spark-1.0.1.tgz'); return false;"> find an Apache mirror </a>
or
<a href="http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1.tgz" onClick="trackOutboundLink(this, 'Release Download Links', 'cloudfront_spark-1.0.1.tgz'); return false;"> direct file download </a>

Verify your download: [signatures and checksums](http://www.apache.org/dist/spark/spark-1.0.1/)

### Link with Spark
Spark artifacts are [hosted in Maven Central](http://search.maven.org/#browse%7C1686516968). You can add a Maven dependency with the following coordinates:

    groupId: org.apache.spark
    artifactId: spark-core_2.10
    version: 1.0.1

### Development Version
If you are interested in working with the newest under-development code or contributing to Spark development, you can also check out the master branch from Git: <tt>git clone git://github.com/apache/spark.git</tt>.

Once you've downloaded Spark, you can find instructions for installing and building it on the <a href="{{site.url}}documentation.html">documentation page</a>.

<h3 id="all-releases">All Releases</h3>
* [Spark 1.0.1](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1.tgz) (July 11, 2014) [(release notes)]({{site.url}}releases/spark-release-1-0-1.html) (prebuilt: [Hadoop1 [HDP1, CDH3]](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-hadoop1.tgz), [CDH4](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-cdh4.tgz), [Hadoop2 [HDP2, CDH5]](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.1-bin-hadoop2.tgz), third-party: [MapRv3](http://package.mapr.com/tools/apache-spark/1.0.1/spark-1.0.1-bin-mapr3.tgz), [MapRv4](http://package.mapr.com/tools/apache-spark/1.0.1/spark-1.0.1-bin-mapr3.tgz))
* [Spark 1.0.0](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0.tgz) (May 30, 2014) [(release notes)]({{site.url}}releases/spark-release-1-0-0.html) (prebuilt: [Hadoop1 [HDP1, CDH3]](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0-bin-hadoop1.tgz), [CDH4](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0-bin-cdh4.tgz), [Hadoop2 [HDP2, CDH5]](http://d3kbcqa49mib13.cloudfront.net/spark-1.0.0-bin-hadoop2.tgz))
* [Spark 0.9.1](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1.tgz) (Apr 9, 2014) [(release notes)]({{site.url}}releases/spark-release-0-9-1.html) (prebuilt: [Hadoop1 [HDP1, CDH3]](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1-bin-hadoop1.tgz), [CDH4](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1-bin-cdh4.tgz), [Hadoop2 [HDP2, CDH5]](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.1-bin-hadoop2.tgz))
* [Spark 0.9.0](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating.tgz) (Feb 2, 2014) [(release notes)]({{site.url}}releases/spark-release-0-9-0.html) (prebuilt: [Hadoop1 [HDP1, CDH3]](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating-bin-hadoop1.tgz), [CDH4](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating-bin-cdh4.tgz), [Hadoop2 [HDP2, CDH5]](http://d3kbcqa49mib13.cloudfront.net/spark-0.9.0-incubating-bin-hadoop2.tgz))
* [Spark 0.8.1](http://d3kbcqa49mib13.cloudfront.net/spark-0.8.1-incubating.tgz) (Dec 19, 2013) [(release notes)]({{site.url}}releases/spark-release-0-8-1.html) (prebuilt: [Hadoop1 [HDP1, CDH3]](http://d3kbcqa49mib13.cloudfront.net/spark-0.8.1-incubating-bin-hadoop1.tgz), [CDH4](http://d3kbcqa49mib13.cloudfront.net/spark-0.8.1-incubating-bin-cdh4.tgz), [Hadoop2 [HDP2, CDH5]](http://d3kbcqa49mib13.cloudfront.net/spark-0.8.1-incubating-bin-hadoop2.tgz))
* [Spark 0.8.0](http://d3kbcqa49mib13.cloudfront.net/spark-0.8.0-incubating.tgz) (Sept 25, 2013) [(release notes)]({{site.url}}releases/spark-release-0-8-0.html) (prebuilt: [Hadoop 1 / CDH3](http://spark-project.org/download/spark-0.8.0-incubating-bin-hadoop1.tgz), [CDH4](http://spark-project.org/download/spark-0.8.0-incubating-bin-cdh4.tgz))
* [Spark 0.7.3](http://spark-project.org/download/spark-0.7.3-sources.tgz) (July 16, 2013) [(release notes)]({{site.url}}releases/spark-release-0-7-3.html) (prebuilt:
[Hadoop1 / CDH3](http://spark-project.org/download/spark-0.7.3-prebuilt-hadoop1.tgz), [CDH4](http://spark-project.org/download/spark-0.7.3-prebuilt-cdh4.tgz))
* [Spark 0.7.2](http://spark-project.org/download/spark-0.7.2-sources.tgz) (June 2, 2013) [(release notes)]({{site.url}}releases/spark-release-0-7-2.html) (prebuilt:
[Hadoop1 / CDH3](http://spark-project.org/download/spark-0.7.2-prebuilt-hadoop1.tgz), [CDH4](http://spark-project.org/download/spark-0.7.2-prebuilt-cdh4.tgz))
* [Spark 0.7.0](http://spark-project.org/download/spark-0.7.0-sources.tgz) (February 27, 2013) [(release notes)]({{site.url}}releases/spark-release-0-7-0.html)
* [Spark 0.6.2](http://spark-project.org/download/spark-0.6.2-sources.tgz) (February 7, 2013) [(release notes)]({{site.url}}releases/spark-release-0-6-2.html)
* [Spark 0.6.1](https://github.com/downloads/mesos/spark/spark-0.6.1-sources.tgz) (November 22, 2012) [(release notes)]({{site.url}}releases/spark-release-0-6-1.html)
* [Spark 0.5.2](https://github.com/downloads/mesos/spark/spark-0.5.2-sources.tgz) (November 22, 2012) [(release notes)]({{site.url}}releases/spark-release-0-5-2.html)
* [Spark 0.6.0](http://github.com/downloads/mesos/spark/spark-0.6.0-sources.tar.gz) (October 15, 2012) [(release notes)]({{site.url}}releases/spark-release-0-6-0.html)
* [Spark 0.5.1](http://github.com/downloads/mesos/spark/spark-0.5.1.tgz) (October 11, 2012) [(release notes)]({{site.url}}releases/spark-release-0-5-1.html)
* [Spark 0.5.0](https://github.com/mesos/spark/tarball/v0.5.0) (June 12, 2012) [(release notes)]({{site.url}}releases/spark-release-0-5-0.html)
* [Spark 0.3 for Scala 2.9](https://github.com/mesos/spark/tarball/0.3-scala-2.9) (July 14, 2011) [(release notes)]({{site.url}}releases/spark-release-0-3.html)
* [Spark 0.3 for Scala 2.8](https://github.com/mesos/spark/tarball/0.3-scala-2.8) (July 14, 2011) [(release notes)]({{site.url}}releases/spark-release-0-3.html)
* [Spark 0.2](https://github.com/mesos/spark/tarball/alpha-0.2) (May 24, 2011)
