---
layout: global
type: "page singular"
title: Spark Streaming
description: Spark Streaming makes it easy to build scalable and fault-tolerant streaming applications.
subproject: Streaming
---


<div class="jumbotron">
  <b>Spark Streaming</b> makes it easy to build scalable fault-tolerant streaming
  applications.
</div>



<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Ease of Use</h2>
    <p class="lead">
      Build applications through high-level operators.
    </p>
    <p>
      Spark Streaming brings Apache Spark's
      <a href="{{site.url}}docs/latest/streaming-programming-guide.html">language-integrated API</a>
      to stream processing, letting you write streaming jobs the same way you write batch jobs.
      It supports Java, Scala and Python.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">

    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
        TwitterUtils.createStream(...)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">filter</span>(<span class="closure">_.getText.contains("Spark")</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">countByWindow</span>(Seconds(5))
      </div>
      <div class="caption">Counting tweets on a sliding window</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Fault Tolerance</h2>
    <p class="lead">
      Stateful exactly-once semantics out of the box.
    </p>
    <p>
      Spark Streaming recovers both lost work
      and operator state (e.g. sliding windows) out of the box, without any extra code on your part.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 300px; display: inline-block;">
      <img src="{{site.url}}images/spark-streaming-recovery.png" style="width: 100%; max-width: 300px;">
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Spark Integration</h2>
    <p class="lead">
      Combine streaming with batch and interactive queries.
    </p>
    <p>
      By running on Spark, Spark Streaming lets you reuse the same code for batch
      processing, join streams against historical data, or run ad-hoc
      queries on stream state.
      Build powerful interactive applications, not just analytics.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="margin-top: 20px; text-align: left; display: inline-block;">
      <div class="code">
        stream.<span class="sparkop">join</span>(historicCounts).<span class="sparkop">filter</span> {<span class="closure"><br/>
        &nbsp;&nbsp;case (word, (curCount, oldCount)) =><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;curCount > oldCount<br/>
        </span>}
      </div>
      <div class="caption">Find words with higher frequency than historic data</div>
    </div>
  </div>
</div>


{% extra %}


<div class="row">
  <div class="col-md-4 col-padded">
    <h3>Deployment Options</h3>
    <p>
      Spark Streaming can read data from
      <a href="http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html">HDFS</a>,
      <a href="http://flume.apache.org">Flume</a>,
      <a href="http://kafka.apache.org">Kafka</a>,
      <a href="https://dev.twitter.com">Twitter</a> and
      <a href="http://zeromq.org">ZeroMQ</a>.
      You can also define your own custom data sources.
    </p>
    <p>
      You can run Spark Streaming on Spark's <a href="{{site.url}}docs/latest/spark-standalone.html">standalone cluster mode</a>
      or <a href="{{site.url}}docs/latest/ec2-scripts.html">EC2</a>.
      It also includes a local run mode for development.
      In production,
      Spark Streaming uses <a href="http://zookeeper.apache.org">ZooKeeper</a> and <a href="http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html">HDFS</a> for high availability.
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Community</h3>
    <p>
      Spark Streaming is developed as part of Apache Spark. It thus gets
      tested and updated with each Spark release.
    </p>
    <p>
      If you have questions about the system, ask on the
      <a href="{{site.url}}community.html#mailing-lists">Spark mailing lists</a>.
    </p>
    <p>
      The Spark Streaming developers welcome contributions. If you'd like to help out,
      read <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">how to
      contribute to Spark</a>, and send us a patch!
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Getting Started</h3>
    <p>
      To get started with Spark Streaming:
    </p>
    <ul class="list-narrow">
      <li><a href="{{site.url}}downloads.html">Download Spark</a>. It includes Streaming as a module.</li>
      <li>Read the <a href="{{site.url}}docs/latest/streaming-programming-guide.html">Spark Streaming programming guide</a>, which includes a tutorial and describes system architecture, configuration and high availability.</li>
      <li>Check out example programs in <a href="https://github.com/apache/incubator-spark/tree/master/examples/src/main/scala/org/apache/spark/streaming/examples">Scala</a> and <a href="https://github.com/apache/incubator-spark/tree/master/examples/src/main/java/org/apache/spark/streaming/examples">Java</a>.</li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-center">
    <a href="{{site.url}}downloads.html" class="btn btn-success btn-lg btn-multiline">
      Download Apache Spark<br/><span class="small">Includes Spark Streaming</span>
    </a>
  </div>
</div>

{% endextra %}
