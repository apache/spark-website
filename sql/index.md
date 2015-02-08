---
layout: global
type: "page singular"
title: Spark SQL
description: Spark SQL is Spark's module for working with structured data, either within Spark programs or through standard JDBC and ODBC connectors.
subproject: SQL
---


<div class="jumbotron">
  <b>Spark SQL</b> is Spark's module for working with structured data.
</div>


<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Integrated</h2>
    <p class="lead">
	  Seemlessly mix SQL queries with Spark programs.
    </p>
    <p>
	  Spark SQL lets you query structured data as a distributed dataset (RDD) in Spark, with integrated APIs in Python, Scala and Java. 
	  This tight integration makes it easy to run SQL queries alongside complex analytic algorithms.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">

    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
	    sqlCtx = new <span class="sparkop">HiveContext</span>(sc)<br/>
		results = sqlCtx.<span class="sparkop">sql</span>(<br/>&nbsp;&nbsp;<span class="closure">"SELECT * FROM people"</span>)<br/>
		names = results.<span class="sparkop">map</span>(<span class="closure">lambda p: p.name</span>)</br>
	  </div>
      <div class="caption">Apply functions to results of SQL queries.</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Unified Data Access</h2>
    <p class="lead">
      Load and query data from a variety of sources.
    </p>
    <p>
      SchemaRDDs provide a single interface for efficiently working with structured data, including Apache Hive tables, parquet files and JSON files.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
		sqlCtx.<span class="sparkop">jsonFile</span>(<span class="closure">"s3n://..."</span>)<br/>&nbsp;&nbsp;.registerAsTable("json")<br/>
		schema_rdd = sqlCtx.<span class="sparkop">sql</span>(<span class="closure">"""<br/>
			&nbsp;&nbsp;SELECT * <br/>
			&nbsp;&nbsp;FROM hiveTable<br/>
			&nbsp;&nbsp;JOIN json ..."""</span>)<br/>
	  </div>
      <div class="caption">Query and join different data sources.</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Hive Compatibility</h2>
    <p class="lead">
      Run unmodified Hive queries on existing warehouses.
    </p>
    <p>
      Spark SQL reuses the Hive frontend and metastore, giving you full compatibility with
      existing Hive data, queries, and UDFs. Simply install it alongside Hive.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 323px; display: inline-block">
      <img src="{{site.url}}images/sql-hive-arch.png" style="width: 100%; max-width: 323px;">
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
      Spark SQL includes a server mode with industry standard JDBC and ODBC connectivity.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 323px; display: inline-block">
      <img src="{{site.url}}images/jdbc.png" style="width: 75%; max-width: 323px;">
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
      <img src="{{site.url}}images/sqlperf.png" style="width: 100%; max-width: 250px;">
      <div class="caption" style="min-width: 272px;">Performance comparison between Shark and Spark SQL</div>
    </div>
  </div>
</div>
-->

{% extra %}


<div class="row">
  <div class="col-md-4 col-padded">
    <h3>Scalability</h3>
    <p>
  	  Use the same engine for both interactive and long queries.		
    </p>
	<p>
      Spark SQL takes advantage of the RDD model to support mid-query fault tolerance, letting it scale to large jobs too.
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
      <a href="{{site.url}}community.html#mailing-lists">Spark mailing lists</a>.
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
      <li><a href="{{site.url}}downloads.html">Download Spark</a>. It includes Spark SQL as a module.</li>
      <li>Read the <a href="{{site.url}}docs/latest/sql-programming-guide.html">Spark SQL programming guide</a>, which includes a examples of common use cases.</li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-center">
    <a href="{{site.url}}downloads.html" class="btn btn-success btn-lg btn-multiline">
      Download Spark<br/><span class="small">Includes Spark SQL</span>
    </a>
  </div>
</div>

{% endextra %}
