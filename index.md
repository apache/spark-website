---
layout: global
title: Home
custom_title: Apache Spark&trade; - Unified Analytics Engine for Big Data
description: Apache Spark is a unified analytics engine for big data processing, with built-in modules for streaming, SQL, machine learning and graph processing.
type: page
navigation:
  weight: 1
  show: true
---


<div class="jumbotron">
  <b>Apache Spark&trade;</b> is a unified analytics engine for large-scale data processing.
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Speed</h2>

    <p class="lead">
      Run workloads 100x faster.
    </p>

    <p>
      Apache Spark achieves high performance for both batch and streaming data, using a state-of-the-art DAG scheduler, a query optimizer, and a physical execution engine.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 272px; display: inline-block; text-align: center;">
      <img src="{{site.baseurl}}/images/logistic-regression.png" style="width: 100%; max-width: 250px;">
      <div class="caption" style="min-width: 272px;">Logistic regression in Hadoop and Spark</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Ease of Use</h2>

    <p class="lead">
      Write applications quickly in Java, Scala, Python, R, and SQL.
    </p>

    <p>
      Spark offers over 80 high-level operators that make it easy to build parallel apps.
      And you can use it <em>interactively</em>
      from the Scala, Python, R, and SQL shells.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="text-align: left; display: inline-block;">
      <div class="code">
df <span style="color: #000080;">=</span> spark.<span style="color: #000000;">read</span>.<span style="color: #000000;">json</span><span style="color: #F78811;">&#40;</span><span style="color: #6666FF;">&quot;logs.json&quot;</span><span style="color: #F78811;">&#41;</span>
df.<span style="color: #000000;">where</span><span style="color: #F78811;">&#40;</span><span style="color: #6666FF;">&quot;age &gt; 21&quot;</span><span style="color: #F78811;">&#41;</span>
  &nbsp;&nbsp;.<span style="color: #000000;">select</span><span style="color: #F78811;">&#40;</span><span style="color: #6666FF;">&quot;name.first&quot;</span><span style="color: #F78811;">&#41;</span>.<span style="color: #000000;">show</span><span style="color: #F78811;">&#40;</span><span style="color: #F78811;">&#41;</span>
      </div>
      <div class="caption">Spark's Python DataFrame API<br/>Read JSON files with automatic schema inference</div>
    </div>
    <!--
    <div class="code" style="margin-top: 20px; text-align: left; display: inline-block;">
      text_file = spark.textFile(<span class="string">"hdfs://..."</span>)<br/>
      &nbsp;<br/>
      text_file.<span class="sparkop">filter</span>(<span class="closure">lambda line: "ERROR" in line</span>)<br/>
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
      Spark powers a stack of libraries including
      <a href="{{site.baseurl}}/sql/">SQL and DataFrames</a>, <a href="{{site.baseurl}}/mllib/">MLlib</a> for machine learning,
      <a href="{{site.baseurl}}/graphx/">GraphX</a>, and <a href="{{site.baseurl}}/streaming/">Spark Streaming</a>.
      You can combine these libraries seamlessly in the same application.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <img src="{{site.baseurl}}/images/spark-stack.png" style="margin-top: 15px; width: 100%; max-width: 296px;" usemap="#stack-map">
    <map name="stack-map">
      <area shape="rect" coords="0,0,74,95" href="{{site.baseurl}}/sql/"
            alt="Spark SQL" title="Spark SQL">
      <area shape="rect" coords="74,0,150,95" href="{{site.baseurl}}/streaming/"
            alt="Spark Streaming" title="Spark Streaming">
      <area shape="rect" coords="150,0,224,95" href="{{site.baseurl}}/mllib/"
            alt="MLlib (machine learning)" title="MLlib">
      <area shape="rect" coords="225,0,300,95" href="{{site.baseurl}}/graphx/"
            alt="GraphX" title="GraphX">
    </map>
  </div>
</div>

<div class="row row-padded" style="margin-bottom: 15px;">
  <div class="col-md-7 col-sm-7">
    <h2>Runs Everywhere</h2>

    <p class="lead">
      Spark runs on Hadoop, Apache Mesos, Kubernetes, standalone, or in the cloud. It can access diverse data sources.
    </p>

    <p>
      You can run Spark using its <a href="{{site.baseurl}}/docs/latest/spark-standalone.html">standalone cluster mode</a>, 
      on <a href="https://github.com/amplab/spark-ec2">EC2</a>, 
      on <a href="https://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/YARN.html">Hadoop YARN</a>, 
      on <a href="https://mesos.apache.org">Mesos</a>, or 
      on <a href="https://kubernetes.io/">Kubernetes</a>.
      Access data in <a href="https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html">HDFS</a>, 
      <a href="https://cassandra.apache.org">Apache Cassandra</a>, 
      <a href="https://hbase.apache.org">Apache HBase</a>,
      <a href="https://hive.apache.org">Apache Hive</a>, 
      and hundreds of other data sources.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <img src="{{site.baseurl}}/images/spark-runs-everywhere.png" style="width: 100%; max-width: 280px;">
  </div>
</div>

<div class="row">
  <div class="col-md-4 col-padded">
    <h3>Community</h3>

    <p>
      Spark is used at a wide range of organizations to process large datasets.
      You can find many example use cases on the
      <a href="{{site.baseurl}}/powered-by.html">Powered By</a> page.
    </p>

    <p>
      There are many ways to reach the community:
    </p>
    <ul class="list-narrow">
      <li>Use the <a href="{{site.baseurl}}/community.html#mailing-lists">mailing lists</a> to ask questions.</li>
      <li>In-person events include numerous <a href="{{site.baseurl}}/community.html#events">meetup groups and conferences</a>.</li>
      <li>We use <a href="https://issues.apache.org/jira/browse/SPARK">JIRA</a> for issue tracking.</li>
    </ul>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Contributors</h3>

    <p>
      Apache Spark is built by a wide set of developers from over 300 companies.
      Since 2009, more than 1200 developers have contributed to Spark!
    </p>

    <p>
      The project's
      <a href="{{site.baseurl}}/committers.html">committers</a>
      come from more than 25 organizations.
    </p>

    <p>
      If you'd like to participate in Spark, or contribute to the libraries on top of it, learn
      <a href="{{site.baseurl}}/contributing.html">how to contribute</a>.
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Getting Started</h3>

    <p>Learning Apache Spark is easy whether you come from a Java, Scala, Python, R, or SQL background:</p>
    <ul class="list-narrow">
      <li><a href="{{site.baseurl}}/downloads.html">Download</a> the latest release: you can run Spark locally on your laptop.</li>
      <li>Read the <a href="{{site.baseurl}}/docs/latest/quick-start.html">quick start guide</a>.</li>
      <li>Learn how to <a href="{{site.baseurl}}/docs/latest/#launching-on-a-cluster">deploy</a> Spark on a cluster.</li>
    </ul>
  </div>
</div>
