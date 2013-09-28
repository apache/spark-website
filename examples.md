---
layout: global
title: Examples
type: "page singular"
navigation:
  weight: 4
  show: true
---
<h2>Spark Examples</h2>

Spark is built around <em>distributed datasets</em> that support types of parallel operations: transformations, which are lazy and yield another distributed dataset (e.g., <code>map</code>, <code>filter</code>, and <code>join</code>), and actions, which force the computation of a dataset and return a result (e.g., <code>count</code>). The following examples show off some of the available operations and features. Several additional examples are distributed with Spark:

 * Core Spark: [Scala examples](https://github.com/apache/incubator-spark/tree/master/examples/src/main/scala/org/apache/spark/examples), [Java examples](https://github.com/apache/incubator-spark/tree/master/examples/src/main/java/org/apache/spark/examples), [Python examples](https://github.com/apache/incubator-spark/tree/master/python/examples)
 * Streaming Spark: [Scala examples](https://github.com/apache/incubator-spark/tree/master/examples/src/main/scala/org/apache/spark/streaming/examples), [Java examples](https://github.com/apache/incubator-spark/tree/master/examples/src/main/java/org/apache/spark/streaming/examples)

<h3>Text Search</h3>

In this example, we search through the error messages in a log file:

<p>
</p><div class="code">
<span class="keyword">val</span> file = spark.textFile(<span class="string">"hdfs://..."</span>)<br>
<span class="keyword">val</span> errors = file.<span class="sparkop">filter</span>(<span class="closure">line =&gt; line.contains("ERROR")</span>)<br>
<span class="comment">// Count all the errors</span><br>
errors.<span class="sparkop">count</span>()<br>
<span class="comment">// Count errors mentioning MySQL</span><br>
errors.<span class="sparkop">filter</span>(<span class="closure">line =&gt; line.contains("MySQL")</span>).<span class="sparkop">count</span>()<br>
<span class="comment">// Fetch the MySQL errors as an array of strings</span><br>
errors.<span class="sparkop">filter</span>(<span class="closure">line =&gt; line.contains("MySQL")</span>).<span class="sparkop">collect</span>()<br>
</div>
<p></p>

<p>The red code fragments are Scala function literals (closures) that get passed automatically to the cluster. The blue ones are Spark operations.</p>

<h3>In-Memory Text Search</h3>

<p>Spark can <em>cache</em> datasets in memory to speed up reuse. In the example above, we can load just the error messages in RAM using:</p>

<p>
</p><div class="code">
errors.<span class="sparkop">cache</span>()
</div>
<p></p>

<p>After the first action that uses <code>errors</code>, later ones will be much faster.</p>


<h3>Word Count</h3>

<p>In this example, we use a few more transformations to build a dataset of (String, Int) pairs called <code>counts</code> and then save it to a file.</p>

<p>
</p><div class="code">
<span class="keyword">val</span> file = spark.textFile(<span class="string">"hdfs://..."</span>)<br>
<span class="keyword">val</span> counts = file.<span class="sparkop">flatMap</span>(<span class="closure">line =&gt; line.split(" ")</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">map</span>(<span class="closure">word =&gt; (word, 1)</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">reduceByKey</span>(<span class="closure">_ + _</span>)<br>
counts.<span class="sparkop">saveAsTextFile</span>(<span class="string">"hdfs://..."</span>)
</div>
<p></p>

<h3>Estimating Pi</h3>

<p>Spark can also be used for compute-intensive tasks. This code estimates <span style="font-family: serif; font-size: 120%;">π</span> by "throwing darts" at a circle. We pick random points in the unit square ((0, 0) to (1,1)) and see how many fall in the unit circle. The fraction should be <span style="font-family: serif; font-size: 120%;">π / 4</span>, so we use this to get our estimate.</p>

<p>
</p><div class="code">
<span class="keyword">val</span> count = spark.parallelize(1 to NUM_SAMPLES).<span class="sparkop">map</span>(<span class="closure">i =&gt;<br>
&nbsp;&nbsp;<span class="keyword">val</span> x = Math.random<br>
&nbsp;&nbsp;<span class="keyword">val</span> y = Math.random<br>
&nbsp;&nbsp;<span class="keyword">if</span> (x*x + y*y &lt; 1) 1.0 <span class="keyword">else</span> 0.0<br>
</span>).<span class="sparkop">reduce</span>(<span class="closure">_ + _</span>)<br>
println(<span class="string">"Pi is roughly "</span> + 4 * count / NUM_SAMPLES)<br>
</div>
<p></p>

<h3>Logistic Regression</h3>

<p>This is an iterative machine learning algorithm that seeks to find the best hyperplane that separates two sets of points in a multi-dimensional feature space. It can be used to classify messages into spam vs non-spam, for example. Because the algorithm applies the same MapReduce operation repeatedly to the same dataset, it benefits greatly from caching the input data in RAM across iterations.</p>

<p>
</p><div class="code">
<span class="keyword">val</span> points = spark.textFile(...).<span class="sparkop">map</span>(parsePoint).<span class="sparkop">cache</span>()<br>
<span class="keyword">var</span> w = Vector.random(D) <span class="comment">// current separating plane</span><br>
<span class="keyword">for</span> (i &lt;- 1 to ITERATIONS) {<br>
&nbsp;&nbsp;<span class="keyword">val</span> gradient = points.<span class="sparkop">map</span>(<span class="closure">p =&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;(1 / (1 + exp(-p.y*(w dot p.x))) - 1) * p.y * p.x<br>
&nbsp;&nbsp;</span>).<span class="sparkop">reduce</span>(<span class="closure">_ + _</span>)<br>
&nbsp;&nbsp;w -= gradient<br>
}<br>
println(<span class="string">"Final separating plane: "</span> + w)<br>
</div>
<p></p>

<p>Note that <code>w</code> gets shipped automatically to the cluster with every <code>map</code> call.</p>

<p>The graph below compares the performance of this Spark program against a Hadoop implementation on 30 GB of data on an 80-core cluster, showing the benefit of in-memory caching:</p>

<p align="center">
<img src="{{site.url}}images/spark-lr.png" alt="Logistic regression performance in Spark vs Hadoop">
</p>

