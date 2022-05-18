---
layout: global
type: "page singular"
title: Spark Structured Streaming
description: Spark Structured Streaming makes it easy to build streaming applications and pipelines with the same and familiar Spark APIs.
subproject: Streaming
---


<div class="jumbotron">
  <a href="{{site.baseurl}}/docs/latest/structured-streaming-programming-guide.html">Spark Structured Streaming</a> makes it easy to build streaming applications and pipelines with the same and familiar Spark APIs.
</div>



<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Ease to use</h2>
    <p>
      Spark Structured Streaming abstracts away complex streaming concepts such as incremental processing, checkpointing, and watermarks 
      so that you can build streaming applications and pipelines without learning any new concepts or tools.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">

    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
        spark<br/>
        &nbsp;&nbsp;.<span class="sparkop">readStream</span><br/>
        &nbsp;&nbsp;.<span class="sparkop">select</span>(<span class="closure">$"value".cast("string").alias("jsonData")</span>)<br/>
        &nbsp;&nbsp;.<span class="sparkop">select</span>(<span class="closure">from_json($"jsonData",jsonSchema).alias("payload")</span>)<br/>
        &nbsp;&nbsp;.<span class="sparkop">writeStream</span><br/>
        &nbsp;&nbsp;.<span class="sparkop">trigger("1 seconds")</span><br/>
        &nbsp;&nbsp;.<span class="sparkop">start</span>()
      </div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Unified batch and streaming APIs</h2>
    <p>
      Spark Structured Streaming provides the same structured APIs (DataFrames and Datasets) as Spark so that you don’t need to develop on or maintain two different technology stacks for batch and streaming.
      In addition, unified APIs make it easy to migrate your existing batch Spark jobs to streaming jobs.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 300px; display: inline-block;">
      <img src="{{site.baseurl}}/images/spark-unified-batch-and-streaming.png" style="width: 100%; max-width: 300px;">
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Low latency and cost effective</h2>
    <p>
      Spark Structured Streaming uses the same underlying architecture as Spark so that you can take advantage of all the performance and cost optimizations built into the Spark engine.
      With Spark Structured Streaming, you can build low latency streaming applications and pipelines cost effectively.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 300px; display: inline-block;">
      <img src="{{site.baseurl}}/images/spark-structured-streaming-incremental-execution.png" style="width: 100%; max-width: 300px;">
    </div>
  </div>
</div>

<div class="row">

  <div class="col-md-4 col-padded">
    <h3>Getting started</h3>
    <p>
      To get started with Spark Structured Streaming:
    </p>
    <ul class="list-narrow">
      <li><a href="{{site.baseurl}}/downloads.html">Download Spark</a>. It includes Structured Streaming as a module.</li>
      <li>Read the <a href="{{site.baseurl}}/docs/latest/structured-streaming-programming-guide.html">Spark Structured Streaming programming guide</a>, which includes programming models, tutorials, configurations, etc.</li>
    </ul>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Community</h3>
    <p>
      Spark Structured Streaming is developed as part of Apache Spark. It thus gets tested and updated with each Spark release.
    </p>
    <p>
      If you have questions about the system, ask on the
      <a href="{{site.baseurl}}/community.html#mailing-lists">Spark mailing lists</a>.
    </p>
    <p>
      The Spark Structured Streaming developers welcome contributions. If you'd like to help out,
      read <a href="{{site.baseurl}}/contributing.html">how to
      contribute to Spark</a>, and send us a patch!
    </p>
  </div>

</div>

<div class="row">
  <div class="col-sm-12 col-center">
    <a href="{{site.baseurl}}/downloads.html" class="btn btn-cta btn-lg btn-multiline">
      Download Apache Spark<br/><span class="small">Includes Spark Structured Streaming</span>
    </a>
  </div>
</div>
