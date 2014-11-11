---
layout: global
title: Home
custom_title: Apache Spark&trade; - Lightning-Fast Cluster Computing
type: page
navigation:
  weight: 1
  show: true
---


<div class="jumbotron">
  <b>Apache Spark&trade;</b> is a fast and general engine for large-scale data processing.
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Speed</h2>

    <p class="lead">
      Run programs up to 100x faster than
      Hadoop MapReduce in memory, or 10x faster on disk.
    </p>

    <p>
      Spark has an advanced DAG execution engine that supports cyclic data flow and
      in-memory computing.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 272px; display: inline-block; text-align: center;">
      <img src="{{site.url}}images/logistic-regression.png" style="width: 100%; max-width: 250px;">
      <div class="caption" style="min-width: 272px;">Logistic regression in Hadoop and Spark</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Ease of Use</h2>

    <p class="lead">
      Write applications quickly in Java, Scala or Python.
    </p>

    <p>
      Spark offers over 80 high-level operators that make it easy to build parallel apps.
      And you can use it <em>interactively</em>
      from the Scala and Python shells.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="text-align: left; display: inline-block;">
      <div class="code">
        file = spark.textFile(<span class="string">"hdfs://..."</span>)<br/>
        &nbsp;<br/>
        file.<span class="sparkop">flatMap</span>(<span class="closure">lambda line: line.split()</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">map</span>(<span class="closure">lambda word: (word, 1)</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">reduceByKey</span>(<span class="closure">lambda a, b: a+b</span>)
      </div>
      <div class="caption">Word count in Spark's Python API</div>
    </div>
    <!--
    <div class="code" style="margin-top: 20px; text-align: left; display: inline-block;">
      file = spark.textFile(<span class="string">"hdfs://..."</span>)<br/>
      &nbsp;<br/>
      file.<span class="sparkop">filter</span>(<span class="closure">lambda line: "ERROR" in line</span>)<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">count</span>()
    </div>
    -->
    <!--<div class="caption">Word count in Spark</div>-->
  </div>
</div>


<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Generality</h2>

    <p class="lead">
      Combine SQL, streaming, and complex analytics.
    </p>

    <p>
      Spark powers a stack of high-level tools including
      <a href="{{site.url}}sql/">Spark SQL</a>, <a href="{{site.url}}mllib/">MLlib</a> for machine learning,
      <a href="{{site.url}}graphx/">GraphX</a>, and <a href="{{site.url}}streaming/">Spark Streaming</a>.
      You can combine these frameworks seamlessly in the same application.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <img src="{{site.url}}images/spark-stack.png" style="margin-top: 15px; width: 100%; max-width: 296px;" usemap="#stack-map">
    <map name="stack-map">
      <area shape="rect" coords="0,0,74,95" href="{{site.url}}sql/"
            alt="Spark SQL" title="Spark SQL">
      <area shape="rect" coords="74,0,150,95" href="{{site.url}}streaming/"
            alt="Spark Streaming" title="Spark Streaming">
      <area shape="rect" coords="150,0,224,95" href="{{site.url}}mllib/"
            alt="MLlib (machine learning)" title="MLlib">
      <area shape="rect" coords="225,0,300,95" href="{{site.url}}graphx/"
            alt="GraphX" title="GraphX">
    </map>
  </div>
</div>

<div class="row row-padded" style="margin-bottom: 15px;">
  <div class="col-md-7 col-sm-7">
    <h2>Runs Everywhere</h2>

    <p class="lead">
      Spark runs on Hadoop YARN, Apache Mesos, standalone, or in the cloud. It can talk to and read from many different data sources such as HDFS, Cassandra, HBase, S3.
    </p>

    <p>
      You can run Spark readily using its <a href="{{site.url}}docs/latest/spark-standalone.html">standalone cluster mode</a>, on <a href="{{site.url}}docs/latest/ec2-scripts.html">EC2</a>, or run it on Hadoop YARN or <a href="http://mesos.apache.org">Apache Mesos</a>.
      It can read from <a href="http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html">HDFS</a>, <a href="http://hbase.apache.org">HBase</a>, <a href="http://cassandra.apache.org">Cassandra</a>,
      and any Hadoop data source.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <img src="{{site.url}}images/spark-runs-everywhere.png" style="width: 100%; max-width: 280px;">
  </div>
</div>

{% extra %}


<div class="row">
  <div class="col-md-4 col-padded">
    <h3>Community</h3>

    <p>
      Spark is used at a wide range of organizations to process large datasets.
      You can find example use cases at the <a href="http://spark-summit.org/summit-2013/">Spark Summit</a>
      conference, or on the
      <a href="https://cwiki.apache.org/confluence/display/SPARK/Powered+By+Spark">Powered By</a>
      page.
    </p>

    <p>
      There are many ways to reach the community:
    </p>
    <ul class="list-narrow">
      <li>Use the <a href="{{site.url}}community.html#mailing-lists">mailing lists</a> to ask questions.</li>
      <li>In-person events include the <a href="http://www.meetup.com/spark-users/">Bay Area Spark meetup</a> and
      <a href="http://spark-summit.org/">Spark Summit</a>.</li>
      <li>We use <a href="https://issues.apache.org/jira/browse/SPARK">JIRA</a> for issue tracking.</li>
    </ul>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Contributors</h3>

    <p>
      Apache Spark is built by a wide set of developers from over 50 companies.
      Since the project started in 2009, more than 250 developers have contributed to Spark!
    </p>

    <p>
      The project's
      <a href="https://cwiki.apache.org/confluence/display/SPARK/Committers">committers</a>
      come from 12 organizations.
    </p>

    <p>
      If you'd like to participate in Spark, or contribute to the libraries on top of it, learn
      <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">how to
        contribute</a>.
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Getting Started</h3>

    <p>Learning Spark is easy whether you come from a Java or Python background:</p>
    <ul class="list-narrow">
      <li><a href="{{site.url}}downloads.html">Download</a> the latest release &mdash; you can run Spark locally on your laptop.</li>
      <li>Read the <a href="{{site.url}}docs/latest/quick-start.html">quick start guide</a>.</li>
      <li>
        Spark Summit 2013 contained free <a href="http://spark-summit.org/summit-2013/#day2">training videos</a> and <a href="http://spark-summit.org/2013/exercises/">exercises</a>
        that you can run on Amazon EC2.
      </li>
      <li>Learn how to <a href="{{site.url}}docs/latest/#launching-on-a-cluster">deploy</a> Spark on a cluster.</li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-center">
    <a href="{{site.url}}downloads.html" class="btn btn-success btn-lg" style="width: 262px;">Download Spark</a>
  </div>
</div>

{% endextra %}
