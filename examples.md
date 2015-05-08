---
layout: global
title: Examples
type: "page singular"
navigation:
  weight: 4
  show: true
---
<h2>Spark Examples</h2>

These examples give a quick overview of the Spark API.
Spark is built on the concept of <em>distributed datasets</em>, which contain arbitrary Java or
Python objects. You create a dataset from external data, then apply parallel operations
to it. There are two types of operations: <em>transformations</em>, which define a new dataset based on
previous ones, and <em>actions</em>, which kick off a job to execute on a cluster.

<h3>Text Search</h3>

In this example, we search through the error messages in a log file:

<ul class="nav nav-tabs">
  <li class="lang-tab lang-tab-python active"><a href="#">Python</a></li>
  <li class="lang-tab lang-tab-scala"><a href="#">Scala</a></li>
  <li class="lang-tab lang-tab-java"><a href="#">Java</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane tab-pane-python active">
    <div class="code code-tab">
    text_file = spark.textFile(<span class="string">"hdfs://..."</span>)<br />
    errors = text_file.<span class="sparkop">filter</span>(<span class="closure">lambda line: "ERROR" in line</span>)<br />
    <span class="comment"># Count all the errors</span><br>
    errors.<span class="sparkop">count</span>()<br>
    <span class="comment"># Count errors mentioning MySQL</span><br>
    errors.<span class="sparkop">filter</span>(<span class="closure">lambda line: "MySQL" in line</span>).<span class="sparkop">count</span>()<br>
    <span class="comment"># Fetch the MySQL errors as an array of strings</span><br>
    errors.<span class="sparkop">filter</span>(<span class="closure">lambda line: "MySQL" in line</span>).<span class="sparkop">collect</span>()<br>
    </div>
  </div>
  <div class="tab-pane tab-pane-scala">
    <div class="code code-tab">
    <span class="keyword">val</span> textFile = spark.textFile(<span class="string">"hdfs://..."</span>)<br>
    <span class="keyword">val</span> errors = textFile.<span class="sparkop">filter</span>(<span class="closure">line =&gt; line.contains("ERROR")</span>)<br>
    <span class="comment">// Count all the errors</span><br>
    errors.<span class="sparkop">count</span>()<br>
    <span class="comment">// Count errors mentioning MySQL</span><br>
    errors.<span class="sparkop">filter</span>(<span class="closure">line =&gt; line.contains("MySQL")</span>).<span class="sparkop">count</span>()<br>
    <span class="comment">// Fetch the MySQL errors as an array of strings</span><br>
    errors.<span class="sparkop">filter</span>(<span class="closure">line =&gt; line.contains("MySQL")</span>).<span class="sparkop">collect</span>()<br>
    </div>
  </div>
  <div class="tab-pane tab-pane-java">
    <div class="code code-tab">
    JavaRDD&lt;String&gt; textFile = spark.textFile(<span class="string">"hdfs://..."</span>);<br>
    JavaRDD&lt;String&gt; errors = textFile.<span class="sparkop">filter</span>(<span class="closure">new Function&lt;String, Boolean&gt;() {<br>
    &nbsp;&nbsp;public Boolean call(String s) { return s.contains("ERROR"); }<br>
    }</span>);<br>
    <span class="comment">// Count all the errors</span><br>
    errors.<span class="sparkop">count</span>();<br>
    <span class="comment">// Count errors mentioning MySQL</span><br>
    errors.<span class="sparkop">filter</span>(<span class="closure">new Function&lt;String, Boolean&gt;() {<br>
    &nbsp;&nbsp;public Boolean call(String s) { return s.contains("MySQL"); }<br>
    }</span>).<span class="sparkop">count</span>();<br>
    <span class="comment">// Fetch the MySQL errors as an array of strings</span><br>
    errors.<span class="sparkop">filter</span>(<span class="closure">new Function&lt;String, Boolean&gt;() {<br>
    &nbsp;&nbsp;public Boolean call(String s) { return s.contains("MySQL"); }<br>
    }</span>).<span class="sparkop">collect</span>();<br>
    </div>
  </div>
</div>

<p>The red code fragments are function literals (closures) that get passed automatically to the cluster. The blue ones are Spark operations.</p>

<h3>In-Memory Text Search</h3>

<p>Spark can <em>cache</em> datasets in memory to speed up reuse. In the example above, we can load just the error messages in RAM using:</p>

<ul class="nav nav-tabs">
  <li class="lang-tab lang-tab-python active"><a href="#">Python</a></li>
  <li class="lang-tab lang-tab-scala"><a href="#">Scala</a></li>
  <li class="lang-tab lang-tab-java"><a href="#">Java</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane tab-pane-python active">
    <div class="code code-tab">
    errors.<span class="sparkop">cache</span>()
    </div>
  </div>
  <div class="tab-pane tab-pane-scala">
    <div class="code code-tab">
    errors.<span class="sparkop">cache</span>()
    </div>
  </div>
  <div class="tab-pane tab-pane-java">
    <div class="code code-tab">
    errors.<span class="sparkop">cache</span>();
    </div>
  </div>
</div>

<p>After the first action that uses <code>errors</code>, later ones will be much faster.</p>


<h3>Word Count</h3>

<p>In this example, we use a few more transformations to build a dataset of (String, Int) pairs called <code>counts</code> and then save it to a file.</p>

<ul class="nav nav-tabs">
  <li class="lang-tab lang-tab-python active"><a href="#">Python</a></li>
  <li class="lang-tab lang-tab-scala"><a href="#">Scala</a></li>
  <li class="lang-tab lang-tab-java"><a href="#">Java</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane tab-pane-python active">
    <div class="code code-tab">
    text_file = spark.textFile(<span class="string">"hdfs://..."</span>)<br>
    counts = text_file.<span class="sparkop">flatMap</span>(<span class="closure">lambda line: line.split(" ")</span>) \<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">map</span>(<span class="closure">lambda word: (word, 1)</span>) \<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">reduceByKey</span>(<span class="closure">lambda a, b: a + b</span>)<br>
    counts.<span class="sparkop">saveAsTextFile</span>(<span class="string">"hdfs://..."</span>)
    </div>
  </div>
  <div class="tab-pane tab-pane-scala">
    <div class="code code-tab">
    <span class="keyword">val</span> textFile = spark.textFile(<span class="string">"hdfs://..."</span>)<br>
    <span class="keyword">val</span> counts = textFile.<span class="sparkop">flatMap</span>(<span class="closure">line =&gt; line.split(" ")</span>)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">map</span>(<span class="closure">word =&gt; (word, 1)</span>)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">reduceByKey</span>(<span class="closure">_ + _</span>)<br>
    counts.<span class="sparkop">saveAsTextFile</span>(<span class="string">"hdfs://..."</span>)
    </div>
  </div>
  <div class="tab-pane tab-pane-java">
    <div class="code code-tab">
    JavaRDD&lt;String&gt; textFile = spark.textFile(<span class="string">"hdfs://..."</span>);<br>
    JavaRDD&lt;String&gt; words = textFile.<span class="sparkop">flatMap</span>(<span class="closure">new FlatMapFunction&lt;String, String&gt;() {<br>
    &nbsp;&nbsp;public Iterable&lt;String&gt; call(String s) { return Arrays.asList(s.split(" ")); }<br>
    }</span>);<br>
    JavaPairRDD&lt;String, Integer&gt; pairs = words.<span class="sparkop">mapToPair</span>(<span class="closure">new PairFunction&lt;String, String, Integer&gt;() {<br>
    &nbsp;&nbsp;public Tuple2&lt;String, Integer&gt; call(String s) { return new Tuple2&lt;String, Integer&gt;(s, 1); }<br>
    }</span>);<br>
    JavaPairRDD&lt;String, Integer&gt; counts = pairs.<span class="sparkop">reduceByKey</span>(<span class="closure">new Function2&lt;Integer, Integer&gt;() {<br>
    &nbsp;&nbsp;public Integer call(Integer a, Integer b) { return a + b; }<br>
    }</span>);<br>
    counts.<span class="sparkop">saveAsTextFile</span>(<span class="string">"hdfs://..."</span>);
    </div>
  </div>
</div>

<h3>Estimating Pi</h3>

<p>Spark can also be used for compute-intensive tasks. This code estimates <span style="font-family: serif; font-size: 120%;">π</span> by "throwing darts" at a circle. We pick random points in the unit square ((0, 0) to (1,1)) and see how many fall in the unit circle. The fraction should be <span style="font-family: serif; font-size: 120%;">π / 4</span>, so we use this to get our estimate.</p>

<ul class="nav nav-tabs">
  <li class="lang-tab lang-tab-python active"><a href="#">Python</a></li>
  <li class="lang-tab lang-tab-scala"><a href="#">Scala</a></li>
  <li class="lang-tab lang-tab-java"><a href="#">Java</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane tab-pane-python active">
    <div class="code code-tab">
    <span class="keyword">def</span> sample(p):<br>
    &nbsp;&nbsp;&nbsp;&nbsp;x, y = random(), random()<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> 1 <span class="keyword">if</span> x*x + y*y < 1 <span class="keyword">else</span> 0<br><br>
    count = spark.parallelize(xrange(0, NUM_SAMPLES)).<span class="sparkop">map</span>(<span class="closure">sample</span>) \<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">reduce</span>(<span class="closure">lambda a, b: a + b</span>)<br>
    print <span class="string">"Pi is roughly %f"</span> % (4.0 * count / NUM_SAMPLES)<br>
    </div>
  </div>
  <div class="tab-pane tab-pane-scala">
    <div class="code code-tab">
    <span class="keyword">val</span> count = spark.parallelize(1 to NUM_SAMPLES).<span class="sparkop">map</span>{<span class="closure">i =&gt;<br>
    &nbsp;&nbsp;val x = Math.random()<br>
    &nbsp;&nbsp;val y = Math.random()<br>
    &nbsp;&nbsp;if (x*x + y*y &lt; 1) 1 else 0<br>
    </span>}.<span class="sparkop">reduce</span>(<span class="closure">_ + _</span>)<br>
    println(<span class="string">"Pi is roughly "</span> + 4.0 * count / NUM_SAMPLES)<br>
    </div>
  </div>
  <div class="tab-pane tab-pane-java">
    <div class="code code-tab">
    <span class="keyword">int</span> count = spark.parallelize(makeRange(1, NUM_SAMPLES)).<span class="sparkop">filter</span>(<span class="closure">new Function&lt;Integer, Boolean&gt;() {<br>
    &nbsp;&nbsp;public Integer call(Integer i) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;double x = Math.random();<br>
    &nbsp;&nbsp;&nbsp;&nbsp;double y = Math.random();<br>
    &nbsp;&nbsp;&nbsp;&nbsp;return x*x + y*y &lt; 1;<br>
    &nbsp;&nbsp;}<br>
    }</span>).<span class="sparkop">count</span>();<br>
    System.out.println(<span class="string">"Pi is roughly "</span> + 4 * count / NUM_SAMPLES);<br>
    </div>
  </div>
</div>

<h3>Logistic Regression</h3>

<p>This is an iterative machine learning algorithm that seeks to find the best hyperplane that separates two sets of points in a multi-dimensional feature space. It can be used to classify messages into spam vs non-spam, for example. Because the algorithm applies the same MapReduce operation repeatedly to the same dataset, it benefits greatly from caching the input in RAM across iterations.</p>

<ul class="nav nav-tabs">
  <li class="lang-tab lang-tab-python active"><a href="#">Python</a></li>
  <li class="lang-tab lang-tab-scala"><a href="#">Scala</a></li>
  <li class="lang-tab lang-tab-java"><a href="#">Java</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane tab-pane-python active">
    <div class="code code-tab">
    points = spark.textFile(...).<span class="sparkop">map</span>(parsePoint).<span class="sparkop">cache</span>()<br>
    w = numpy.random.ranf(size = D) <span class="comment"># current separating plane</span><br>
    <span class="keyword">for</span> i <span class="keyword">in</span> range(ITERATIONS):<br>
    &nbsp;&nbsp;&nbsp;&nbsp;gradient = points.<span class="sparkop">map</span>(<span class="closure"><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lambda p: (1 / (1 + exp(-p.y*(w.dot(p.x)))) - 1) * p.y * p.x<br>
    &nbsp;&nbsp;&nbsp;&nbsp;</span>).<span class="sparkop">reduce</span>(<span class="closure">lambda a, b: a + b</span>)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;w -= gradient<br>
    print <span class="string">"Final separating plane: %s"</span> % w<br>
    </div>
  </div>
  <div class="tab-pane tab-pane-scala">
    <div class="code code-tab">
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
  </div>
  <div class="tab-pane tab-pane-java">
    <div class="code code-tab">
    <span class="keyword">class</span> ComputeGradient <span class="keyword">extends</span> Function&lt;DataPoint, Vector&gt; {<br>
    &nbsp;&nbsp;<span class="keyword">private</span> Vector w;<br>
    &nbsp;&nbsp;ComputeGradient(Vector w) { <span class="keyword">this</span>.w = w; }<br>
    &nbsp;&nbsp;<span class="keyword">public</span> Vector call(DataPoint p) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> p.x.times(p.y * (1 / (1 + Math.exp(w.dot(p.x))) - 1));<br>
    &nbsp;&nbsp;}<br>
    }<br>
    <br>
    JavaRDD&lt;DataPoint&gt; points = spark.textFile(...).<span class="sparkop">map</span>(<span class="closure">new ParsePoint()</span>).<span class="sparkop">cache</span>();<br>
    Vector w = Vector.random(D); <span class="comment">// current separating plane</span><br>
    <span class="keyword">for</span> (<span class="keyword">int</span> i = 0; i &lt; ITERATIONS; i++) {<br>
    &nbsp;&nbsp;Vector gradient = points.<span class="sparkop">map</span>(<span class="closure">new ComputeGradient(w)</span>).<span class="sparkop">reduce</span>(<span class="closure">new AddVectors()</span>);<br>
    &nbsp;&nbsp;w = w.subtract(gradient);<br>
    }<br>
    System.out.println(<span class="string">"Final separating plane: "</span> + w);<br>
    </div>
  </div>
</div>

<p>Note that the current separating plane, <code>w</code>, gets shipped automatically to the cluster with every <code>map</code> call.</p>

<p>The graph below compares the running time per iteration of this Spark program against a Hadoop implementation on 100 GB of data on a 100-node cluster, showing the benefit of in-memory caching:</p>

<p style="margin-top: 20px; margin-bottom: 30px;">
<img src="{{site.url}}images/logistic-regression.png" alt="Logistic regression performance in Spark vs Hadoop">
</p>

<a name="additional"></a>
<h2>Additional Examples</h2>

Many additional examples are distributed with Spark:

 * Basic Spark: [Scala examples](https://github.com/apache/spark/tree/master/examples/src/main/scala/org/apache/spark/examples), [Java examples](https://github.com/apache/spark/tree/master/examples/src/main/java/org/apache/spark/examples), [Python examples](https://github.com/apache/spark/tree/master/examples/src/main/python)
 * Spark Streaming: [Scala examples](https://github.com/apache/spark/tree/master/examples/src/main/scala/org/apache/spark/examples/streaming), [Java examples](https://github.com/apache/spark/tree/master/examples/src/main/java/org/apache/spark/examples/streaming)

