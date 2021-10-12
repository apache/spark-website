---
layout: global
type: "page singular"
title: MLlib
description: MLlib is Apache Spark's scalable machine learning library, with APIs in Java, Scala, Python, and R.
subproject: MLlib
---

<div class="jumbotron">
  <b>MLlib</b> is Apache Spark's scalable machine learning library.
</div>

<div class="row row-padded">
  <div class="col-md-7 col-sm-7">
    <h2>Ease of use</h2>
    <p class="lead">
      Usable in Java, Scala, Python, and R.
    </p>
    <p>
      MLlib fits into <a href="{{site.baseurl}}/">Spark</a>'s
      APIs and interoperates with <a href="http://www.numpy.org">NumPy</a>
      in Python (as of Spark 0.9) and R libraries (as of Spark 1.5).
      You can use any Hadoop data source (e.g. HDFS, HBase, or local files), making it
      easy to plug into Hadoop workflows.
    </p>
  </div>
  <div class="col-md-5 col-sm-5 col-padded-top col-center">

    <div style="margin-top: 15px; text-align: left; display: inline-block;">
      <div class="code">
        data = spark.read.format(<span class="string">"libsvm"</span>)\<br/>
	    &nbsp;&nbsp;.load(<span class="string">"hdfs://..."</span>)<br/>
        <br/>
        model = <span class="sparkop">KMeans</span>(k=10).fit(data)
      </div>
      <div class="caption">Calling MLlib in Python</div>
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
      <img src="{{site.baseurl}}/images/logistic-regression.png" style="width: 100%; max-width: 250px;">
      <div class="caption" style="min-width: 272px;">Logistic regression in Hadoop and Spark</div>
    </div>
  </div>
</div>

<div class="row row-padded" style="margin-bottom: 15px;">
  <div class="col-md-7 col-sm-7">
    <h2>Runs everywhere</h2>
    <p class="lead">
      Spark runs on Hadoop, Apache Mesos, Kubernetes, standalone, or in the cloud, against diverse data sources.
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
    <img src="{{site.baseurl}}/images/hadoop.jpg" style="width: 100%; max-width: 280px;">
  </div>
</div>

<div class="row">
  <div class="col-md-4 col-padded">
    <h3>Algorithms</h3>
    <p>
      MLlib contains many algorithms and utilities.
    </p>
    <p>
      ML algorithms include:
    </p>
    <ul class="list-narrow">
      <li>Classification: logistic regression, naive Bayes,...</li>
      <li>Regression: generalized linear regression, survival regression,...</li>
      <li>Decision trees, random forests, and gradient-boosted trees</li>
      <li>Recommendation: alternating least squares (ALS)</li>
      <li>Clustering: K-means, Gaussian mixtures (GMMs),...</li>
      <li>Topic modeling: latent Dirichlet allocation (LDA)</li>
      <li>Frequent itemsets, association rules, and sequential pattern mining</li>
    </ul>
    <p>
      ML workflow utilities include:
    </p>
    <ul class="list-narrow">
      <li>Feature transformations: standardization, normalization, hashing,...</li>
      <li>ML Pipeline construction</li>
      <li>Model evaluation and hyper-parameter tuning</li>
      <li>ML persistence: saving and loading models and Pipelines</li>
    </ul>
    <p>
      Other utilities include:
    </p>
    <ul class="list-narrow">
      <li>Distributed linear algebra: SVD, PCA,...</li>
      <li>Statistics: summary statistics, hypothesis testing,...</li>
    </ul>
    <p>Refer to the <a href="{{site.baseurl}}/docs/latest/ml-guide.html">MLlib guide</a> for usage examples.</p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Community</h3>
    <p>
      MLlib is developed as part of the Apache Spark project. It thus gets
      tested and updated with each Spark release.
    </p>
    <p>
      If you have questions about the library, ask on the
      <a href="{{site.baseurl}}/community.html#mailing-lists">Spark mailing lists</a>.
    </p>
    <p>
      MLlib is still a rapidly growing project and welcomes contributions. If you'd like to submit an algorithm to MLlib,
      read <a href="{{site.baseurl}}/contributing.html">how to
      contribute to Spark</a> and send us a patch!
    </p>
  </div>

  <div class="col-md-4 col-padded">
    <h3>Getting started</h3>
    <p>
      To get started with MLlib:
    </p>
    <ul class="list-narrow">
      <li><a href="{{site.baseurl}}/downloads.html">Download Spark</a>. MLlib is included as a module.</li>
      <li>Read the <a href="{{site.baseurl}}/docs/latest/ml-guide.html">MLlib guide</a>, which includes
      various usage examples.</li>
      <li>Learn how to <a href="{{site.baseurl}}/docs/latest/#launching-on-a-cluster">deploy</a> Spark on a cluster
        if you'd like to run in distributed mode. You can also run locally on a multicore machine
        without any setup.
      </li>
    </ul>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-center">
    <a href="{{site.baseurl}}/downloads.html" class="btn btn-cta btn-lg btn-multiline">
      Download Apache Spark<br/><span class="small">Includes MLlib</span>
    </a>
  </div>
</div>
