---
layout: global
type: "page singular"
title: GraphX
description: GraphX is Apache Spark's API for graphs and graph-parallel computation, with a built-in library of common algorithms.
subproject: GraphX
---

<div class="jumbotron">
  <b>GraphX</b> is Apache Spark's API for graphs and graph-parallel computation.
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Flexibility</h2>
    <p class="lead">
      Seamlessly work with both graphs and collections.
    </p>
    <p>
      GraphX unifies ETL, exploratory analysis, and iterative graph computation within a single system. You can <a href="{{site.url}}docs/latest/graphx-programming-guide.html#the-property-graph">view</a> the same data as both graphs and collections, <a href="{{site.url}}docs/latest/graphx-programming-guide.html#property-operators">transform</a> and <a href="{{site.url}}docs/latest/graphx-programming-guide.html#join-operators">join</a> graphs with RDDs efficiently, and write custom iterative graph algorithms using the <a href="{{site.url}}docs/latest/graphx-programming-guide.html#pregel-api">Pregel API</a>.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">

    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
        graph = <span class="sparkop">Graph</span>(vertices, edges)<br/>
        messages = spark.textFile(<span class="string">"hdfs://..."</span>)<br/>
        graph2 = graph.<span class="sparkop">joinVertices</span>(messages) {<br/>
        &nbsp;&nbsp;<span class="closure">(id, vertex, msg) => ...</span><br/>
        }
      </div>
      <div class="caption">Using GraphX in Scala</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Speed</h2>
    <p class="lead">
      Comparable performance to the fastest specialized graph processing systems.
    </p>
    <p>
      GraphX competes on performance with the fastest graph systems while retaining Spark's flexibility, fault tolerance, and ease of use.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 272px; display: inline-block; text-align: center; padding:0;">
      <img src="{{site.url}}images/graphx-perf-comparison.png" style="width: 60%; max-width: 250px;">
      <div class="caption" style="min-width: 272px;">End-to-end PageRank performance (20 iterations, 3.7B edges)</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Algorithms</h2>
    <p class="lead">
      Choose from a growing library of graph algorithms.
    </p>
    <p>In addition to a <a href="{{site.url}}docs/latest/graphx-programming-guide.html#graph-operators">highly flexible API</a>, GraphX comes with a variety of graph algorithms, many of which were contributed by our users.</p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top">
    <ul class="list-narrow">
      <li>PageRank</li>
      <li>Connected components</li>
      <li>Label propagation</li>
      <li>SVD++</li>
      <li>Strongly connected components</li>
      <li>Triangle count</li>
    </ul>
  </div>
</div>


<div class="row">
  <div class="col-md-6 col-padded">
    <h3>Community</h3>
    <p>
      GraphX is developed as part of the Apache Spark project. It thus gets
      tested and updated with each Spark release.
    </p>
    <p>
      If you have questions about the library, ask on the
      <a href="{{site.url}}community.html#mailing-lists">Spark mailing lists</a>.
    </p>
    <p>
      GraphX is in the alpha stage and welcomes contributions. If you'd like to submit a change to GraphX,
      read <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">how to
      contribute to Spark</a> and send us a patch!
    </p>
  </div>

  <div class="col-md-6 col-padded">
    <h3>Getting Started</h3>
    <p>
      To get started with GraphX:
    </p>
    <ul class="list-narrow">
      <li><a href="{{site.url}}downloads.html">Download Spark</a>. GraphX is included as a module.</li>
      <li>Read the <a href="{{site.url}}docs/latest/graphx-programming-guide.html">GraphX guide</a>, which includes
      usage examples.</li>
      <li>Learn how to <a href="{{site.url}}docs/latest/#launching-on-a-cluster">deploy</a> Spark on a cluster
        if you'd like to run in distributed mode. You can also run locally on a multicore machine
        without any setup.
      </li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-center">
    <a href="{{site.url}}downloads.html" class="btn btn-success btn-lg btn-multiline">
      Download Spark<br/><span class="small">Includes GraphX</span>
    </a>
  </div>
</div>
