---
layout: home
title: Home
custom_title: Apache Spark&trade; - Unified Engine for large-scale data analytics
description: Apache Spark is a multi-language engine for executing data engineering, data science, and machine learning on single-node machines or clusters.
type: page
navigation:
  weight: 1
  show: true
---


<section style="min-height:810px; background-color: #FFF6ED;">
    <div class="container pt-4 pb-4">
        <div class="row">
            <div class="col-12 col-md-7 col-lg-5" style="position: relative;">
                <div class="spark-star-bg"></div>
                <div class="apache-spark-motto">Simple.<br/>Fast.<br/>Scalable.<br/>Unified.</div>
            </div>
            <div class="col-12 col-md-5 col-lg-7 mt-4 p-md-0">
                <div class="row">
                    <div class="col-12 mb-5" style="font-style: normal;font-weight: bold;font-size: 32px;line-height: 42px;">
                        Key features
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6 features">
                            <img class="icon" src="{{site.baseurl}}/images/batch-sstreaming-data-icon.svg" width="75" height="75"
                                 alt="Batch/streaming data"/>
                            <div class="title">Batch/streaming data</div>
                            <div class="details">Unify the processing of your data in batches and  real-time streaming, using your preferred language: Python, SQL, Scala, Java or R.
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-5 mt-lg-0 ms-auto features">
                            <img class="icon" src="{{site.baseurl}}/images/sql-analytics-icon.svg" width="75" height="75"
                                 alt="SQL analytics">
                            <div class="title">SQL analytics</div>
                            <div class="details">Execute fast, distributed ANSI SQL queries for dashboarding and ad-hoc reporting. Runs faster than most data warehouses.
                            </div>
                        </div>
                    </div>
                    <div class="row mt-lg-5">
                        <div class="col-12 col-lg-6 mt-5 mt-lg-0 features">
                            <img class="icon" src="{{site.baseurl}}/images/data-science-scale-icon.svg" width="75" height="75"
                                 alt="Data science at scale">
                            <div class="title">Data science at scale</div>
                            <div class="details">Perform Exploratory Data Analysis (EDA) on petabyte-scale data without having to resort to downsampling
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-5 mt-lg-0 ms-auto features">
                            <img class="icon" src="{{site.baseurl}}/images/machine-learning-icon.svg" width="75" height="75"
                                 alt="Machine Learning">
                            <div class="title">Machine learning</div>
                            <div class="details">Train machine learning algorithms on a laptop and use the same code to scale to fault-tolerant clusters of thousands of machines.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="spark-run-now">
    <nav>
        <div class="container-md">
            <div class="row nav nav-tabs" id="nav-tab" role="tablist">
                <button class="col-12 col-md-3 col-lg-2 nav-link border-end active" id="nav-python-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-python" type="button" role="tab" aria-controls="nav-python"
                        aria-selected="true">Python
                </button>
                <button class="col-12 col-md-2 nav-link border-end" id="nav-sql-tab" data-bs-toggle="tab" data-bs-target="#nav-sql"
                        type="button" role="tab" aria-controls="nav-sql" aria-selected="false">SQL
                </button>
                <button class="col-12 col-md-2 nav-link border-end" id="nav-scala-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-scala" type="button" role="tab" aria-controls="nav-scala"
                        aria-selected="false">Scala
                </button>
                <button class="col-12 col-md-2 nav-link border-end" id="nav-java-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-java" type="button" role="tab" aria-controls="nav-java"
                        aria-selected="false">Java
                </button>
                <button class="col-12 col-md-2 nav-link" id="nav-r-tab" data-bs-toggle="tab" data-bs-target="#nav-r"
                        type="button" role="tab" aria-controls="nav-r" aria-selected="false">R
                </button>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="tab-content py-5 spark-install" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-python" role="tabpanel" aria-labelledby="nav-python-tab">
                <div class="mb-2 title">Run now</div>
                <div style="font-size: 16px;">Installing with 'pip'
                </div>
                <div class="code">
                    <p>$ pip install pyspark</p>
                    <p>$ pyspark</p>
                </div>
                <div class="examples mt-5">
                    <div class="window"><span class="circle red"></span><span class="circle yellow"></span><span
                            class="circle green"></span></div>
                    <nav class="container">
                        <div class="row nav nav-tabs" id="nav-exampleTab" role="tablist">
                            <button class="col-12 col-md-4 nav-link active" id="nav-quick_start-tab"
                                    data-bs-toggle="tab" data-bs-target="#nav-quick_start" type="button" role="tab"
                                    aria-controls="nav-quick_start" aria-selected="true">QuickStart
                            </button>
                            <button class="col-12 col-md-4 nav-link" id="nav-machine_learning-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-machine_learning" type="button" role="tab"
                                    aria-controls="nav-machine_learning" aria-selected="false">Machine Learning
                            </button>
                            <button class="col-12 col-md-4 nav-link" id="nav-ad-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-analytics" type="button" role="tab"
                                    aria-controls="nav-analytics" aria-selected="false">Analytics & Data Science
                            </button>
                        </div>
                    </nav>
                    <div class="tab-content spark-install" id="nav-exampleContent">
                        <div class="tab-pane show active" id="nav-quick_start" role="tabpanel" aria-labelledby="nav-quick_start-tab">
{% highlight python %}
df = spark.read.json("logs.json")
df.where("age > 21").select("name.first").show()
{% endhighlight %}
                        </div>
                        <div class="tab-pane" id="nav-machine_learning" role="tabpanel" aria-labelledby="nav-machine_learning-tab">
{% highlight python %}
# Every record contains a label and feature vector
df = spark.createDataFrame(data, ["label", "features"])

# Split the data into train/test datasets
train_df, test_df = df.randomSplit([.80, .20], seed=42)

# Set hyperparameters for the algorithm
rf = RandomForestRegressor(numTrees=100)

# Fit the model to the training data
model = rf.fit(train_df)

# Generate predictions on the test dataset.
model.transform(test_df).show()
{% endhighlight %}
                        </div>
                        <div class="tab-pane" id="nav-analytics" role="tabpanel" aria-labelledby="nav-ad-tab">
{% highlight python %}
df = spark.read.csv("accounts.csv", header=True)

# Select subset of features and filter for balance > 0
filtered_df = df.select("AccountBalance", "CountOfDependents").filter("AccountBalance > 0")

# Generate summary statistics
filtered_df.summary().show()
{% endhighlight %}
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-sql" role="tabpanel" aria-labelledby="nav-sql-tab">
                <div class="mb-2 title">Run now</div>
                <div class="code">
                    <p>$ SPARK-HOME/bin/spark-sql</p>
                    <p>spark-sql></p>
                </div>
                <div class="examples mt-5">
                    <div class="window"><span class="circle red"></span><span class="circle yellow"></span><span class="circle green"></span></div>
                    <div class="spark-code">
{% highlight sql %}
SELECT
  name.first AS first_name,
  name.last AS last_name,
  age
FROM json.`logs.json`
  WHERE age > 21;
{% endhighlight %}
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-scala" role="tabpanel" aria-labelledby="nav-scala-tab">
                <div class="mb-2 title">Run now</div>
                <div class="code">
                    <p>$ SPARK-HOME/bin/spark-shell</p>
                    <p>scala></p>
                </div>
                <div class="examples mt-5">
                    <div class="window"><span class="circle red"></span><span class="circle yellow"></span><span
                            class="circle green"></span></div>
                    <div class="spark-code">
{% highlight scala %}
val df = spark.read.json("logs.json")
df.where("age > 21")
  .select("name.first").show()
{% endhighlight %}
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-java" role="tabpanel" aria-labelledby="nav-java-tab">
                <div class="mb-2 title">Run now</div>
                <div class="code">
                    <p>$ SPARK-HOME/bin/spark-shell</p>
                    <p>scala></p>
                </div>
                <div class="examples mt-5">
                    <div class="window"><span class="circle red"></span><span class="circle yellow"></span><span class="circle green"></span></div>
                    <div class="spark-code">
{% highlight java %}
Dataset df = spark.read().json("logs.json");
df.where("age > 21")
  .select("name.first").show();
{% endhighlight %}
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="nav-r" role="tabpanel" aria-labelledby="nav-r-tab">
                <div class="mb-2 title">Run now</div>
                <div class="code">
                    <p>$ SPARK-HOME/bin/sparkR</p>
                    <p>></p>
                </div>
                <div class="examples mt-5">
                    <div class="window"><span class="circle red"></span><span class="circle yellow"></span><span class="circle green"></span></div>
                    <div class="spark-code">
{% highlight r %}
df <- read.json(path = "logs.json")
df <- filter(df, df$age > 21)
head(select(df, df$name.first))
{% endhighlight %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-5" style="background: rgba(186, 231, 253, 0.17);">
    <div class="container text-center">
        <div class="row" style="line-height: 42px;">
            <div style="font-style: normal;font-weight: bold;font-size: 32px;line-height: 42px;text-align: center;">The most widely-used
                engine for scalable computing
            </div>
            <div style="font-style: normal;font-weight: normal;font-size: 24px;line-height: 30px;text-align: center;">Thousands of
                companies, including 80% of the Fortune 500, use Apache Spark<span class="tm">&trade;</span>.<br/>Over 2,000 contributors to
                the open source project from industry and academia.
            </div>
        </div>
    </div>
</section>
<section class="py-5 text-center">
    <div class="container">
        <div class="row col-12 col-md-12 col-lg-7 mx-auto">
            <div style="font-style: normal;font-weight: bold;font-size: 32px;line-height: 42px;text-align: center;">Ecosystem</div>
            <div style="font-style: normal;font-weight: normal;font-size: 24px;line-height: 30px;text-align: center;">Apache Spark<span class="tm">&trade;</span> integrates with your favorite frameworks, helping to scale them to thousands of machines.
            </div>
        </div>
        <div class="row" style="margin-top: 100px">
            <div class="col-12 col-md-12 col-lg-5 mx-auto">
                <div class="text-center ecosystem-title">Data science and Machine learning
                </div>
                <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/scikit-learn.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/pandas.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/tf_logo_social.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/pytorch.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/mlflow-logo.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/r_logo.png" height="90" width="166"/></div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-5 mt-5 mt-md-5 mt-lg-0 mx-auto">
                <div class="text-center ecosystem-title">SQL analytics and BI</div>
                <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/superset.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/PowerBI-Logo-Square-Insight-Platforms.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/looker_logo.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/redash.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/tableau-logo-tableau-software.png" height="90" width="166"/></div>
                    <div class="col-12 col-md-4"><img src="{{site.baseurl}}/images/dbt.png" height="90" width="166"/></div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-10 mt-5 pt-5 mx-auto">
                <div class="text-center ecosystem-title">Storage and Infrastructure</div>
                <div class="row d-flex align-items-center">
                    <div class="col"><img src="{{site.baseurl}}/images/Elasticsearch.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/mongo.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/kafka.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/delta-lake-logo.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/kubernetes-horizontal-color.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/AirflowLogo.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/Apache_Parquet_logo.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/sqlserver.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/1280px-Cassandra_logo.png" height="90" width="166"/></div>
                    <div class="col"><img src="{{site.baseurl}}/images/Apache_Orc_logo.png" height="90" width="166"/></div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-5 text-center">
    <div class="container">
        <div class="row">
            <div style="font-style: normal;font-weight: bold;font-size: 32px;line-height: 54px;text-align: center;">Spark SQL engine: under the hood</div>
            <div style="font-style: normal;font-weight: normal;font-size: 24px;line-height: 42px;text-align: center;">Apache Spark<span class="tm">&trade;</span> is built on an advanced distributed SQL engine
                for large-scale data
            </div>
        </div>
    </div>
</section>
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-5 order-2 order-lg-1 mt-5 mt-lg-0" style="font-size: 19px;line-height: 33px;">
                <div class="scalable-data-science">
                    <a href="{{site.baseurl}}/docs/latest/sql-performance-tuning.html#adaptive-query-execution" alt="Adaptive Query Execution">Adaptive Query Execution</a>
                    <p>Spark SQL adapts the execution plan at runtime, such as automatically setting the number of reducers and join algorithms.</p>
                </div>
                <div class="mt-5 scalable-data-science">
                    <a href="{{site.baseurl}}/docs/latest/sql-ref-ansi-compliance.html" alt="Support for ANSI SQL">Support for ANSI SQL</a>
                    <p>Use the same SQL you’re already comfortable with.</p>
                </div>
                <div class="mt-5 scalable-data-science">
                    <a href="{{site.baseurl}}/docs/latest/sql-data-sources-json.html" alt="Structured and unstructured data">Structured and unstructured data</a>
                    <p>Spark SQL works on structured tables and unstructured data such as JSON or images.</p>
                </div>
            </div>
            <div class="col-12 col-lg-6 order-1 order-lg-21 text-center ms-auto">
                <div class="fw-bold mb-2">TPC-DS 1TB No-Stats With vs. Without Adaptive Query Execution</div>
                <img src="{{site.baseurl}}/images/AQE-compersion.png" width="100%"/>
                <div class="fw-bold mt-2" style="font-size: 18px;">Accelerates TPC-DS queries up to <span style="color: #f55b15;">8x</span></div>
            </div>
        </div>
    </div>
</section>
<section class="py-5">
    <div class="container">
        <div class="row text-center">
            <div style="font-style: normal;font-weight: bold;font-size: 32px;line-height: 42px;text-align: center;">Join the community</div>
            <div style="font-style: normal;font-weight: normal;font-size: 24px;line-height: 30px;text-align: center;" class="col-9 mx-auto">Spark has a thriving open source community, with
                contributors from around the globe building features, documentation and assisting other users.
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-sm-4 p-3">
                <div class="card">
                    <a href="{{site.baseurl}}/community.html" alt="Mailing list">
                        <div class="card-body text-center text-xl-start">
                            <img class="d-block d-xl-inline-block m-auto" src="{{site.baseurl}}/images/icon-orange-mailing-list.svg"
                                 width="96" height="96" alt="Mailing list"/> Mailing list
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-12 col-sm-4 p-3">
                <div class="card">
                    <a href="https://github.com/apache/spark" alt="GitHub Source">
                        <div class="card-body text-center text-xl-start">
                            <img class="d-block d-xl-inline-block mx-auto" src="{{site.baseurl}}/images/icon-orange-built-in-functions.svg"
                                 width="96" height="96" alt="Github source"/> GitHub Source
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-12 col-sm-4 p-3">
                <div class="card">
                    <a href="{{site.baseurl}}/news/" alt="News and events">
                        <div class="card-body text-center text-xl-start">
                            <img class="d-block d-xl-inline-block mx-auto" src="{{site.baseurl}}/images/icon-orange-Delta-Table.svg"
                                 width="96" height="96" alt="News and events"/> News and events
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-12 col-sm-4 p-3">
                <div class="card">
                    <a href="{{site.baseurl}}/contributing.html" alt="How to contribute">
                        <div class="card-body text-center text-xl-start">
                            <img class="d-block d-xl-inline-block mx-auto" src="{{site.baseurl}}/images/icon-orange-Collaborative.svg"
                                 width="96" height="96" alt="How to contribute"/> How to contribute
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-12 col-sm-4 p-3">
                <div class="card">
                    <a href="https://issues.apache.org/jira/projects/SPARK/issues" alt="Issue tracking">
                        <div class="card-body text-center text-xl-start">
                            <img class="d-block d-xl-inline-block mx-auto" src="{{site.baseurl}}/images/icon-orange-Scheduled-Jobs.svg"
                                 width="96" height="96" alt="Issue tracking"/> Issue tracking
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-12 col-sm-4 p-3">
                <div class="card">
                    <a href="{{site.baseurl}}/committers.html" alt="Committers">
                        <div class="card-body text-center text-xl-start">
                            <img class="d-block d-xl-inline-block mx-auto"
                                 src="{{site.baseurl}}/images/icon-orange-data-engineer-persona.svg" width="96" height="96"
                                 alt="Committers"/> Committers
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
