---
layout: global
type: "page singular"
title: Spark SQL &amp; DataFrames
description: Spark SQL is Spark's module for working with structured data, either within Spark programs or through standard JDBC and ODBC connectors.
subproject: SQL
---


<div class="jumbotron">
  <b>Spark SQL</b> is Apache Spark's module for working with structured data.
</div>


<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Integrated</h2>
    <p class="lead">
	  Seamlessly mix SQL queries with Spark programs.
    </p>
    <p>
	  Spark SQL lets you query structured data inside Spark programs, using either SQL or a familiar <a href="/docs/latest/sql-programming-guide.html">DataFrame API</a>. Usable in Java, Scala, Python and R.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">

    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
	    context = <span class="sparkop">HiveContext</span>(sc)<br/>
		results = context.<span class="sparkop">sql</span>(<br/>&nbsp;&nbsp;<span class="closure">"SELECT * FROM people"</span>)<br/>
		names = results.<span class="sparkop">map</span>(<span class="closure">lambda p: p.name</span>)<br/>
	  </div>
      <div class="caption">Apply functions to results of SQL queries.</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Uniform Data Access</h2>
    <p class="lead">
      Connect to any data source the same way.
    </p>
    <p>
      DataFrames and SQL provide a common way to access a variety of data sources, including Hive, Avro, Parquet, ORC, JSON, and JDBC. You can even join data across these sources.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
		context.<span class="sparkop">jsonFile</span>(<span class="closure">"s3n://..."</span>)<br/>&nbsp;&nbsp;.registerTempTable("json")<br/>
		results = context.<span class="sparkop">sql</span>(<span class="closure"><br/>
			&nbsp;&nbsp;"""SELECT * <br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FROM people<br/>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JOIN json ..."""</span>)<br/>
	  </div>
      <div class="caption">Query and join different data sources.</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Hive Compatibility</h2>
    <p class="lead">
      Run unmodified Hive queries on existing data.
    </p>
    <p>
      Spark SQL reuses the Hive frontend and metastore, giving you full compatibility with
      existing Hive data, queries, and UDFs. Simply install it alongside Hive.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 323px; display: inline-block">
      <img src="{{site.baseurl}}/images/sql-hive-arch.png" style="width: 100%; max-width: 323px;">
      <div class="caption">Spark SQL can use existing Hive metastores, SerDes, and UDFs.</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Standard Connectivity</h2>
    <p class="lead">
      Connect through JDBC or ODBC.
    </p>
    <p>
      A server mode provides industry standard JDBC and ODBC connectivity for business intelligence tools.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 323px; display: inline-block">
      <img src="{{site.baseurl}}/images/jdbc.png" style="width: 75%; max-width: 323px;">
      <div class="caption">Use your existing BI tools to query big data.</div>
    </div>
  </div>
</div>

<!--
<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Speed</h2>
    <p class="lead">
      Optimized to execute on Spark.
    </p>
    <p>
      Spark SQL was built using the Catalyst optimizer, which automatically rewrites your queries to execute more efficiently.
  	  By leveraging advanced techniques like runtime code generation, Spark SQL makes it easier to write lightning-fast analytic applications.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 272px; display: inline-block; text-align: center;">
      <img src="{{site.baseurl}}/images/sqlperf.png" style="width: 100%; max-width: 250px;">
      <div class="caption" style="min-width: 272px;">Performance comparison between Shark and Spark SQL</div>
    </div>
  </div>
</div>
-->

<div class="row">
  <div class="col-md-4 col-padded">
    <h3>Performance &amp; Scalability</h3>
    <p>
      Spark SQL includes a cost-based optimizer, columnar storage and code generation to make queries fast.
      At the same time, it scales to thousands of nodes and multi hour queries using the Spark engine, which provides full mid-query fault tolerance.
      Don't worry about using a different engine for historical data.
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Community</h3>
    <p>
      Spark SQL is developed as part of Apache Spark. It thus gets
      tested and updated with each Spark release.
    </p>
    <p>
      If you have questions about the system, ask on the
      <a href="{{site.baseurl}}/community.html#mailing-lists">Spark mailing lists</a>.
    </p>
    <p>
      The Spark SQL developers welcome contributions. If you'd like to help out,
      read <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">how to
      contribute to Spark</a>, and send us a patch!
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Getting Started</h3>
    <p>
      To get started with Spark SQL:
    </p>
    <ul class="list-narrow">
      <li><a href="{{site.baseurl}}/downloads.html">Download Spark</a>. It includes Spark SQL as a module.</li>
      <li>Read the <a href="{{site.baseurl}}/docs/latest/sql-programming-guide.html">Spark SQL and DataFrame guide</a> to learn the API.</li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-center">
    <a href="{{site.baseurl}}/downloads.html" class="btn btn-success btn-lg btn-multiline">
      Download Apache Spark<br/><span class="small">Includes Spark SQL</span>
    </a>
  </div>
</div>
