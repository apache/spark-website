---
layout: global
type: "page singular"
title: MLlib
subproject: MLlib
---

<div class="jumbotron">
  <b>MLlib</b> is Apache Spark's scalable machine learning library.
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Ease of Use</h2>
    <p class="lead">
      Usable in Java, Scala and Python.
    </p>
    <p>
      MLlib fits into <a href="{{site.url}}">Spark</a>'s
      APIs and interoperates with <a href="http://www.numpy.org">NumPy</a> in Python (starting in Spark 0.9).
      You can use any Hadoop data source (e.g. HDFS, HBase, or local files), making it
      easy to plug into Hadoop workflows.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">

    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
        points = spark.textFile(<span class="string">"hdfs://..."</span>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span class="sparkop">map</span>(<span class="closure">parsePoint</span>)<br/>
        <br/>
        model = KMeans.<span class="sparkop">train</span>(points)
      </div>
      <div class="caption">Calling MLlib in Scala</div>
    </div>
  </div>
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Performance</h2>
    <p class="lead">
      High-quality algorithms, 100x faster than MapReduce.
    </p>
    <p>
      Spark excels at iterative computation, enabling MLlib to run fast.
      At the same time, we care about algorithmic performance:
      MLlib contains high-quality algorithms that leverage iteration, and
      can yield better results than the one-pass approximations sometimes used on MapReduce.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <div style="width: 100%; max-width: 272px; display: inline-block; text-align: center;">
      <img src="{{site.url}}images/logistic-regression.png" style="width: 100%; max-width: 250px;">
      <div class="caption" style="min-width: 272px;">Logistic regression in Hadoop and Spark</div>
    </div>
  </div>
</div>

<div class="row row-padded" style="margin-bottom: 15px;">
  <div class="col-md-7 col-sm-7">
    <h2>Easy to Deploy</h2>
    <p class="lead">
      Runs on existing Hadoop clusters and data.
    </p>
    <p>
      If you have a Hadoop 2 cluster, you can run Spark and MLlib without any pre-installation.
      Otherwise, Spark is easy to run <a href="{{site.url}}docs/latest/spark-standalone.html">standalone</a>
      or on <a href="{{site.url}}docs/latest/ec2-scripts.html">EC2</a> or <a href="http://mesos.apache.org">Mesos</a>.
      You can read from <a href="http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html">HDFS</a>, <a href="http://hbase.apache.org">HBase</a>, or any Hadoop data source.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">
    <img src="{{site.url}}images/hadoop.jpg" style="width: 100%; max-width: 280px;">
  </div>
</div>

{% extra %}


<div class="row">
  <div class="col-md-4 col-padded">
    <h3>Algorithms</h3>
    <p>
      MLlib 0.8.1 contains the following algorithms:
    </p>
    <ul class="list-narrow">
      <li>K-means clustering with <a href="http://theory.stanford.edu/~sergei/papers/vldb12-kmpar.pdf">K-means|| initialization</a>.</li>
      <li>L<sub>1</sub>- and L<sub>2</sub>-regularized <a href="http://en.wikipedia.org/wiki/Linear_regression">linear regression</a>.</li>
      <li>L<sub>1</sub>- and L<sub>2</sub>-regularized <a href="http://en.wikipedia.org/wiki/Logistic_regression">logistic regression</a>.</li>
      <li><a href="http://www.hpl.hp.com/personal/Robert_Schreiber/papers/2008%20AAIM%20Netflix/netflix_aaim08(submitted).pdf">Alternating least squares</a> collaborative filtering, with explicit
      ratings or <a href="http://www2.research.att.com/~yifanhu/PUB/cf.pdf">implicit feedback</a>.</li>
      <!--<li><a href="http://en.wikipedia.org/wiki/Naive_Bayes_classifier">Naive Bayes</a> multinomial classification.</li>-->
      <li>Stochastic gradient descent.</li>
    </ul>
    <p>Refer to the <a href="{{site.url}}docs/latest/mllib-guide.html">MLlib guide</a> for usage examples.</p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Community</h3>
    <p>
      MLlib is developed as part of the Apache Spark project. It thus gets
      tested and updated with each Spark release.
    </p>
    <p>
      If you have questions about the library, ask on the
      <a href="{{site.url}}community.html#mailing-lists">Spark mailing lists</a>.
    </p>
    <p>
      MLlib is still a young project and welcomes contributions. If you'd like to submit an algorithm to MLlib,
      read <a href="https://cwiki.apache.org/confluence/display/SPARK/Contributing+to+Spark">how to
      contribute to Spark</a> and send us a patch!
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Getting Started</h3>
    <p>
      To get started with MLlib:
    </p>
    <ul class="list-narrow">
      <li><a href="{{site.url}}downloads.html">Download Spark</a>. MLlib is included as a module.</li>
      <li>Read the <a href="{{site.url}}docs/latest/mllib-guide.html">MLlib guide</a>, which includes
      various usage examples.</li>
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
      Download Spark<br/><span class="small">Includes MLlib</span>
    </a>
  </div>
</div>

{% endextra %}
