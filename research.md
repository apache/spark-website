---
layout: global
title: Research
type: "page singular"
navigation:
  weight: 6
  show: true
---
<h2>Spark Research</h2>

<p>
Apache Spark started as a research project at UC Berkeley in the <a href="https://amplab.cs.berkeley.edu">AMPLab</a>, which focuses on big data analytics.
</p>

<p class="noskip">
Our goal was to design a programming model that supports a much wider class of applications than MapReduce, while maintaining its automatic fault tolerance. In particular, MapReduce is inefficient for <em>multi-pass</em> applications that require low-latency data sharing across multiple parallel operations. These applications are quite common in analytics, and include:
</p>

<ul>
  <li><em>Iterative algorithms</em>, including many machine learning algorithms and graph algorithms like PageRank.</li>
  <li><em>Interactive data mining</em>, where a user would like to load data into RAM across a cluster and query it repeatedly.</li>
  <li><em>Streaming applications</em> that maintain aggregate state over time.</li>
</ul>

<p>
Traditional MapReduce and DAG engines are suboptimal for these applications because they are based on acyclic data flow: an application has to run as a series of distinct jobs, each of which reads data from stable storage (e.g. a distributed file system) and writes it back to stable storage. They incur significant cost loading the data on each step and writing it back to replicated storage.
</p>

<p>
Spark offers an abstraction called <a href="http://people.csail.mit.edu/matei/papers/2012/nsdi_spark.pdf"><em>resilient distributed datasets (RDDs)</em></a> to support these applications efficiently. RDDs can be stored in memory between queries <em>without</em> requiring replication.  Instead, they rebuild lost data on failure using <em>lineage</em>: each RDD remembers how it was built from other datasets (by transformations like <code>map</code>, <code>join</code> or <code>groupBy</code>) to rebuild itself.  RDDs allow Spark to outperform existing models by up to 100x in multi-pass analytics. We showed that RDDs can support a wide variety of iterative algorithms, as well as interactive data mining and a highly efficient SQL engine (<a href="http://shark.cs.berkeley.edu">Shark</a>).
</p>

<p class="noskip">You can find more about the research behind Spark in the following papers:</p>

<ul>
  <li>
    <a href="https://people.csail.mit.edu/matei/papers/2016/sigmod_sparkr.pdf">SparkR: Scaling R Programs with Spark</a>, Shivaram Venkataraman, Zongheng Yang, Davies Liu, Eric Liang, Hossein Falaki, Xiangrui Meng, Reynold Xin, Ali Ghodsi, Michael Franklin, Ion Stoica, and Matei Zaharia. <em>SIGMOD 2016</em>. June 2016.
  </li>
  <li>
    <a href="http://www.jmlr.org/papers/volume17/15-237/15-237.pdf">MLlib: Machine Learning in Apache Spark</a>, Xiangrui Meng, Joseph Bradley, Burak Yavuz, Evan Sparks, Shivaram Venkataraman, Davies Liu, Jeremy Freeman, DB Tsai, Manish Amde, Sean Owen, Doris Xin, Reynold Xin, Michael J. Franklin, Reza Zadeh, Matei Zaharia, and Ameet Talwalkar. <em>Journal of Machine Learning Research (JMLR)</em>. 2016.
  </li>
  <li>
    <a href="http://people.csail.mit.edu/matei/papers/2015/sigmod_spark_sql.pdf">Spark SQL: Relational Data Processing in Spark</a>. Michael Armbrust, Reynold S. Xin, Cheng Lian, Yin Huai, Davies Liu, Joseph K. Bradley, Xiangrui Meng, Tomer Kaftan, Michael J. Franklin, Ali Ghodsi, Matei Zaharia. <em>SIGMOD 2015</em>. June 2015.
  </li>
  <li>
    <a href="https://amplab.cs.berkeley.edu/wp-content/uploads/2014/02/graphx.pdf">GraphX: Unifying Data-Parallel and Graph-Parallel Analytics</a>. Reynold S. Xin, Daniel Crankshaw, Ankur Dave, Joseph E. Gonzalez, Michael J. Franklin, Ion Stoica. <em>OSDI 2014</em>. October 2014.
  </li>
  <li>
    <a href="http://people.csail.mit.edu/matei/papers/2013/sosp_spark_streaming.pdf">Discretized Streams: Fault-Tolerant Streaming Computation at Scale</a>. Matei Zaharia, Tathagata Das, Haoyuan Li, Timothy Hunter, Scott Shenker, Ion Stoica. <em>SOSP 2013</em>. November 2013.
  </li>
  <li>
    <a href="http://people.csail.mit.edu/matei/papers/2013/sigmod_shark.pdf">Shark: SQL and Rich Analytics at Scale</a>. Reynold S. Xin, Joshua Rosen, Matei Zaharia, Michael J. Franklin, Scott Shenker, Ion Stoica. <em>SIGMOD 2013</em>. June 2013.
  </li>
  <li>
    <a href="http://people.csail.mit.edu/matei/papers/2012/hotcloud_spark_streaming.pdf">Discretized Streams: An Efficient and Fault-Tolerant Model for Stream Processing on Large Clusters</a>.  Matei Zaharia, Tathagata Das, Haoyuan Li, Scott Shenker, Ion Stoica. <em>HotCloud 2012</em>. June 2012.
  </li>
  <li>
    <a href="http://people.csail.mit.edu/matei/papers/2012/sigmod_shark_demo.pdf">Shark: Fast Data Analysis Using Coarse-grained Distributed Memory</a> (demo). Cliff Engle, Antonio Lupher, Reynold S. Xin, Matei Zaharia, Haoyuan Li, Scott Shenker, Ion Stoica. <em>SIGMOD 2012</em>. May 2012. <b>Best Demo Award</b>.
  </li>
  <li>
    <a href="http://people.csail.mit.edu/matei/papers/2012/nsdi_spark.pdf">Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing</a>.  Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave, Justin Ma, Murphy McCauley, Michael J. Franklin, Scott Shenker, Ion Stoica. <em>NSDI 2012</em>. April 2012. <b>Best Paper Award</b>.
  </li>
  <li>
    <a href="http://people.csail.mit.edu/matei/papers/2010/hotcloud_spark.pdf">Spark: Cluster Computing with Working Sets</a>. Matei Zaharia, Mosharaf Chowdhury, Michael J. Franklin, Scott Shenker, Ion Stoica. <em>HotCloud 2010</em>. June 2010.
  </li>
</ul>
