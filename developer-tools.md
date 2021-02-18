---
layout: global
title: Useful Developer Tools
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h2>Useful Developer Tools</h2>

<h3 id="reducing-build-times">Reducing Build Times</h3>

<h4>SBT: Avoiding Re-Creating the Assembly JAR</h4>

Spark's default build strategy is to assemble a jar including all of its dependencies. This can 
be cumbersome when doing iterative development. When developing locally, it is possible to create 
an assembly jar including all of Spark's dependencies and then re-package only Spark itself 
when making changes.

```
$ build/sbt clean package
$ ./bin/spark-shell
$ export SPARK_PREPEND_CLASSES=true
$ ./bin/spark-shell # Now it's using compiled classes
# ... do some local development ... #
$ build/sbt compile
# ... do some local development ... #
$ build/sbt compile
$ unset SPARK_PREPEND_CLASSES
$ ./bin/spark-shell
 
# You can also use ~ to let sbt do incremental builds on file changes without running a new sbt session every time
$ build/sbt ~compile
```

<h4>Maven: Speeding up Compilation with Zinc</h4>

[Zinc](https://github.com/typesafehub/zinc) is a long-running server version of SBT's incremental
compiler. When run locally as a background process, it speeds up builds of Scala-based projects
like Spark. Developers who regularly recompile Spark with Maven will be the most interested in
Zinc. The project site gives instructions for building and running `zinc`; OS X users can
install it using `brew install zinc`.

If using the `build/mvn` package `zinc` will automatically be downloaded and leveraged for all
builds. This process will auto-start after the first time `build/mvn` is called and bind to port
3030 unless the `ZINC_PORT` environment variable is set. The `zinc` process can subsequently be
shut down at any time by running `build/zinc-<version>/bin/zinc -shutdown` and will automatically
restart whenever `build/mvn` is called.

<h3>Building submodules individually</h3>

For instance, you can build the Spark Core module using:

```
$ # sbt
$ build/sbt
> project core
> package

$ # or you can build the spark-core module with sbt directly using:
$ build/sbt core/package

$ # Maven
$ build/mvn package -DskipTests -pl core
```

<a name="individual-tests"></a>
<h3 id="running-individual-tests">Running Individual Tests</h3>

When developing locally, it's often convenient to run a single test or a few tests, rather than running the entire test suite.

<h4>Testing with SBT</h4>

The fastest way to run individual tests is to use the `sbt` console. It's fastest to keep a `sbt` console open, and use it to re-run tests as necessary.  For example, to run all of the tests in a particular project, e.g., `core`:

```
$ build/sbt
> project core
> test
```

You can run a single test suite using the `testOnly` command.  For example, to run the DAGSchedulerSuite:

```
> testOnly org.apache.spark.scheduler.DAGSchedulerSuite
```

The `testOnly` command accepts wildcards; e.g., you can also run the `DAGSchedulerSuite` with:

```
> testOnly *DAGSchedulerSuite
```

Or you could run all of the tests in the scheduler package:

```
> testOnly org.apache.spark.scheduler.*
```

If you'd like to run just a single test in the `DAGSchedulerSuite`, e.g., a test that includes "SPARK-12345" in the name, you run the following command in the sbt console:

```
> testOnly *DAGSchedulerSuite -- -z "SPARK-12345"
```

If you'd prefer, you can run all of these commands on the command line (but this will be slower than running tests using an open console).  To do this, you need to surround `testOnly` and the following arguments in quotes:

```
$ build/sbt "core/testOnly *DAGSchedulerSuite -- -z SPARK-12345"
```

For more about how to run individual tests with sbt, see the [sbt documentation](https://www.scala-sbt.org/0.13/docs/Testing.html).

<h4>Testing with Maven</h4>

With Maven, you can use the `-DwildcardSuites` flag to run individual Scala tests:

```
build/mvn -Dtest=none -DwildcardSuites=org.apache.spark.scheduler.DAGSchedulerSuite test
```

You need `-Dtest=none` to avoid running the Java tests.  For more information about the ScalaTest Maven Plugin, refer to the [ScalaTest documentation](http://www.scalatest.org/user_guide/using_the_scalatest_maven_plugin).

To run individual Java tests, you can use the `-Dtest` flag:

```
build/mvn test -DwildcardSuites=none -Dtest=org.apache.spark.streaming.JavaAPISuite test
```

<h4>Testing PySpark</h4>

To run individual PySpark tests, you can use `run-tests` script under `python` directory. Test cases are located at `tests` package under each PySpark packages.
Note that, if you add some changes into Scala or Python side in Apache Spark, you need to manually build Apache Spark again before running PySpark tests in order to apply the changes.
Running PySpark testing script does not automatically build it.

Also, note that there is an ongoing issue to use PySpark on macOS High Serria+. `OBJC_DISABLE_INITIALIZE_FORK_SAFETY`
should be set to `YES` in order to run some of tests.
See [PySpark issue](https://issues.apache.org/jira/browse/SPARK-25473) and [Python issue](https://bugs.python.org/issue33725) for more details.

To run test cases in a specific module:

```
$ python/run-tests --testnames pyspark.sql.tests.test_arrow
```

To run test cases in a specific class:

```
$ python/run-tests --testnames 'pyspark.sql.tests.test_arrow ArrowTests'
```

To run single test case in a specific class:

```
$ python/run-tests --testnames 'pyspark.sql.tests.test_arrow ArrowTests.test_null_conversion'
```

You can also run doctests in a specific module:

```
$ python/run-tests --testnames pyspark.sql.dataframe
```

Lastly, there is another script called `run-tests-with-coverage` in the same location, which generates coverage report for PySpark tests. It accepts same arguments with `run-tests`.

```
$ python/run-tests-with-coverage --testnames pyspark.sql.tests.test_arrow --python-executables=python
...
Name                              Stmts   Miss Branch BrPart  Cover
-------------------------------------------------------------------
pyspark/__init__.py                  42      4      8      2    84%
pyspark/_globals.py                  16      3      4      2    75%
...
Generating HTML files for PySpark coverage under /.../spark/python/test_coverage/htmlcov
```

You can check the coverage report visually by HTMLs under `/.../spark/python/test_coverage/htmlcov`.

Please check other available options via `python/run-tests[-with-coverage] --help`.

<h4>Testing K8S</h4>

If you have made changes to the K8S bindings in Apache Spark, it would behoove you to test locally before submitting a PR.  This is relatively simple to do, but it will require a local (to you) installation of [minikube](https://kubernetes.io/docs/setup/minikube/).  Due to how minikube interacts with the host system, please be sure to set things up as follows:

- minikube version v0.34.1 (or greater, but backwards-compatibility between versions is spotty)
- You must use a VM driver!  Running minikube with the `--vm-driver=none` option requires that the user launching minikube/k8s have root access.  Our Jenkins workers use the [kvm2](https://github.com/kubernetes/minikube/blob/master/docs/drivers.md#kvm2-driver) drivers.  More details [here](https://github.com/kubernetes/minikube/blob/master/docs/drivers.md).
- kubernetes version v1.13.3 (can be set by executing `minikube config set kubernetes-version v1.13.3`)

Once you have minikube properly set up, and have successfully completed the [quick start](https://kubernetes.io/docs/setup/minikube/#quickstart), you can test your changes locally.  All subsequent commands should be run from your root spark/ repo directory:

1) Build a tarball to test against:

```
export DATE=`date "+%Y%m%d"`
export REVISION=`git rev-parse --short HEAD`
export ZINC_PORT=$(python -S -c "import random; print(random.randrange(3030,4030))")
export HADOOP_PROFILE=hadoop-2.7

./dev/make-distribution.sh --name ${DATE}-${REVISION} --pip --tgz -DzincPort=${ZINC_PORT} \
     -P$HADOOP_PROFILE -Pkubernetes -Pkinesis-asl -Phive -Phive-thriftserver
export TARBALL_TO_TEST=($(pwd)/spark-*${DATE}-${REVISION}.tgz)
```

2) Use that tarball and run the K8S integration tests:

```
PVC_TMP_DIR=$(mktemp -d)
export PVC_TESTS_HOST_PATH=$PVC_TMP_DIR
export PVC_TESTS_VM_PATH=$PVC_TMP_DIR

minikube --vm-driver=<YOUR VM DRIVER HERE> start --memory 6000 --cpus 8
minikube config set kubernetes-version v1.13.3

minikube mount ${PVC_TESTS_HOST_PATH}:${PVC_TESTS_VM_PATH} --9p-version=9p2000.L --gid=0 --uid=185 &; MOUNT_PID=$!

kubectl create clusterrolebinding serviceaccounts-cluster-admin --clusterrole=cluster-admin --group=system:serviceaccounts || true

./resource-managers/kubernetes/integration-tests/dev/dev-run-integration-tests.sh \
    --spark-tgz $TARBALL_TO_TEST --hadoop-profile $HADOOP_PROFILE

kill -9 $MOUNT_PID
minikube stop
```

After the run is completed, the integration test logs are saved here: `./resource-managers/kubernetes/integration-tests/target/integration-tests.log`.

In case of a failure the POD logs (driver and executors) can be found at the end of the failed test (within `integration-tests.log`) in the `EXTRA LOGS FOR THE FAILED TEST` section.

Kubernetes, and more importantly, minikube have rapid release cycles, and point releases have been found to be buggy and/or break older and existing functionality.  If you are having trouble getting tests to pass on Jenkins, but locally things work, don't hesitate to file a Jira issue.

<h3>Running tests in your forked repository using GitHub Actions</h3>

GitHub Actions is a functionality within GitHub that enables continuous integration and a wide range of automation.
We already have started using some action scripts and one of them is to run tests for [pull requests](https://spark.apache.org/contributing.html).
If you are planning to create a new pull request, it is important to check if tests can pass on your branch before creating a pull request.
This is because our GitHub Acrions script automatically runs tests for your pull request/following commits and
this can burden our limited resources of GitHub Actions.

Our script enables you to run tests for a branch in your forked repository.
Let's say that you have a branch named "your_branch" for a pull request.
To run tests on "your_branch" and check test results:

- Clicks a "Actions" tab in your forked repository.
- Selects a "Build and test" workflow in a "All workflows" list.
- Pushes a "Run workflow" button and enters "your_branch" in a "Target branch to run" field.
- When a "Build and test" workflow finished, clicks a "Report test results" workflow to check test results.

<img src="/images/running-tests-using-github-actions.png" style="width: 100%; max-width: 800px;" />

<h3>ScalaTest Issues</h3>

If the following error occurs when running ScalaTest

```
An internal error occurred during: "Launching XYZSuite.scala".
java.lang.NullPointerException
```
It is due to an incorrect Scala library in the classpath. To fix it:

- Right click on project
- Select `Build Path | Configure Build Path`
- `Add Library | Scala Library`
- Remove `scala-library-2.10.4.jar - lib_managed\jars`

In the event of "Could not find resource path for Web UI: org/apache/spark/ui/static", 
it's due to a classpath issue (some classes were probably not compiled). To fix this, it 
sufficient to run a test from the command line:

```
build/sbt "testOnly org.apache.spark.rdd.SortingSuite"
```

<h3>Running Different Test Permutations on Jenkins</h3>

When running tests for a pull request on Jenkins, you can add special phrases to the title of 
your pull request to change testing behavior. This includes:

- `[test-maven]` - signals to test the pull request using maven
- `[test-hadoop2.7]` - signals to test using Spark's Hadoop 2.7 profile
- `[test-hadoop3.2]` - signals to test using Spark's Hadoop 3.2 profile
- `[test-hadoop3.2][test-java11]` - signals to test using Spark's Hadoop 3.2 profile with JDK 11
- `[test-hive1.2]` - signals to test using Spark's Hive 1.2 profile
- `[test-hive2.3]` - signals to test using Spark's Hive 2.3 profile

<h3>Binary compatibility</h3>

To ensure binary compatibility, Spark uses [MiMa](https://github.com/typesafehub/migration-manager).

<h4>Ensuring binary compatibility</h4>

When working on an issue, it's always a good idea to check that your changes do
not introduce binary incompatibilities before opening a pull request.

You can do so by running the following command:

```
$ dev/mima
```

A binary incompatibility reported by MiMa might look like the following:

```
[error] method this(org.apache.spark.sql.Dataset)Unit in class org.apache.spark.SomeClass does not have a correspondent in current version
[error] filter with: ProblemFilters.exclude[DirectMissingMethodProblem]("org.apache.spark.SomeClass.this")
```

If you open a pull request containing binary incompatibilities anyway, Jenkins
will remind you by failing the test build with the following message:

```
Test build #xx has finished for PR yy at commit ffffff.

  This patch fails MiMa tests.
  This patch merges cleanly.
  This patch adds no public classes.
```

<h4>Solving a binary incompatibility</h4>

If you believe that your binary incompatibilies are justified or that MiMa
reported false positives (e.g. the reported binary incompatibilities are about a
non-user facing API), you can filter them out by adding an exclusion in
[project/MimaExcludes.scala](https://github.com/apache/spark/blob/master/project/MimaExcludes.scala)
containing what was suggested by the MiMa report and a comment containing the
JIRA number of the issue you're working on as well as its title.

For the problem described above, we might add the following:

{% highlight scala %}
// [SPARK-zz][CORE] Fix an issue
ProblemFilters.exclude[DirectMissingMethodProblem]("org.apache.spark.SomeClass.this")
{% endhighlight %}

Otherwise, you will have to resolve those incompatibilies before opening or
updating your pull request. Usually, the problems reported by MiMa are
self-explanatory and revolve around missing members (methods or fields) that
you will have to add back in order to maintain binary compatibility.

<h3>Checking Out Pull Requests</h3>

Git provides a mechanism for fetching remote pull requests into your own local repository. 
This is useful when reviewing code or testing patches locally. If you haven't yet cloned the 
Spark Git repository, use the following command:

```
$ git clone https://github.com/apache/spark.git
$ cd spark
```

To enable this feature you'll need to configure the git remote repository to fetch pull request 
data. Do this by modifying the `.git/config` file inside of your Spark directory. The remote may 
not be named "origin" if you've named it something else:

```
[remote "origin"]
  url = git@github.com:apache/spark.git
  fetch = +refs/heads/*:refs/remotes/origin/*
  fetch = +refs/pull/*/head:refs/remotes/origin/pr/*   # Add this line
```

Once you've done this you can fetch remote pull requests

```
# Fetch remote pull requests
$ git fetch origin
# Checkout a remote pull request
$ git checkout origin/pr/112
# Create a local branch from a remote pull request
$ git checkout origin/pr/112 -b new-branch
```

<h3>Generating Dependency Graphs</h3>

```
$ # sbt
$ build/sbt dependency-tree
 
$ # Maven
$ build/mvn -DskipTests install
$ build/mvn dependency:tree
```

<h3>Organizing Imports</h3>

You can use a <a href="https://plugins.jetbrains.com/plugin/7350">IntelliJ Imports Organizer</a> 
from Aaron Davidson to help you organize the imports in 
your code.  It can be configured to match the import ordering from the style guide.

<h3>Formatting Code</h3>

To format Scala code, run the following command prior to submitting a PR:

```
$ ./dev/scalafmt
```

By default, this script will format files that differ from git master. For more information, see <a href="https://scalameta.org/scalafmt/">scalafmt documentation</a>, but use the existing script not a locally installed version of scalafmt.

<h3>IDE Setup</h3>

<h4>IntelliJ</h4>

While many of the Spark developers use SBT or Maven on the command line, the most common IDE we 
use is IntelliJ IDEA. You can get the community edition for free (Apache committers can get 
free IntelliJ Ultimate Edition licenses) and install the JetBrains Scala plugin from `Preferences > Plugins`.

To create a Spark project for IntelliJ:

- Download IntelliJ and install the 
<a href="https://confluence.jetbrains.com/display/SCA/Scala+Plugin+for+IntelliJ+IDEA">Scala plug-in for IntelliJ</a>.
- Go to `File -> Import Project`, locate the spark source directory, and select "Maven Project".
- In the Import wizard, it's fine to leave settings at their default. However it is usually useful 
to enable "Import Maven projects automatically", since changes to the project structure will 
automatically update the IntelliJ project.
- As documented in <a href="https://spark.apache.org/docs/latest/building-spark.html">Building Spark</a>, 
some build configurations require specific profiles to be 
enabled. The same profiles that are enabled with `-P[profile name]` above may be enabled on the 
Profiles screen in the Import wizard. For example, if developing for Hadoop 2.7 with YARN support, 
enable profiles `yarn` and `hadoop-2.7`. These selections can be changed later by accessing the 
"Maven Projects" tool window from the View menu, and expanding the Profiles section.

Other tips:

- "Rebuild Project" can fail the first time the project is compiled, because generate source files 
are not automatically generated. Try clicking the "Generate Sources and Update Folders For All 
Projects" button in the "Maven Projects" tool window to manually generate these sources.
- The version of Maven bundled with IntelliJ may not be new enough for Spark. If that happens,
the action "Generate Sources and Update Folders For All Projects" could fail silently. 
Please remember to reset the Maven home directory 
(`Preference -> Build, Execution, Deployment -> Maven -> Maven home directory`) of your project to 
point to a newer installation of Maven. You may also build Spark with the script `build/mvn` first.
If the script cannot locate a new enough Maven installation, it will download and install a recent 
version of Maven to folder `build/apache-maven-<version>/`.
- Some of the modules have pluggable source directories based on Maven profiles (i.e. to support 
both Scala 2.11 and 2.10 or to allow cross building against different versions of Hive). In some 
cases IntelliJ's does not correctly detect use of the maven-build-plugin to add source directories. 
In these cases, you may need to add source locations explicitly to compile the entire project. If 
so, open the "Project Settings" and select "Modules". Based on your selected Maven profiles, you 
may need to add source folders to the following modules:
    - spark-hive: add v0.13.1/src/main/scala
    - spark-streaming-flume-sink: add target\scala-2.11\src_managed\main\compiled_avro
    - spark-catalyst: add target\scala-2.11\src_managed\main
- Compilation may fail with an error like "scalac: bad option: 
-P:/home/jakub/.m2/repository/org/scalamacros/paradise_2.10.4/2.0.1/paradise_2.10.4-2.0.1.jar". 
If so, go to Preferences > Build, Execution, Deployment > Scala Compiler and clear the "Additional 
compiler options" field.  It will work then although the option will come back when the project 
reimports.  If you try to build any of the projects using quasiquotes (eg., sql) then you will 
need to make that jar a compiler plugin (just below "Additional compiler options"). 
Otherwise you will see errors like:
```
/Users/irashid/github/spark/sql/catalyst/src/main/scala/org/apache/spark/sql/catalyst/expressions/codegen/CodeGenerator.scala
Error:(147, 9) value q is not a member of StringContext
 Note: implicit class Evaluate2 is not applicable here because it comes after the application point and it lacks an explicit result type
        q"""
        ^ 
```
<h4>Debug Spark Remotely</h4>
This part will show you how to debug Spark remotely with IntelliJ.

<h5>Set up Remote Debug Configuration</h5>
Follow <i>Run > Edit Configurations > + > Remote</i> to open a default Remote Configuration template:
<img src="/images/intellij_remote_debug_configuration.png" style="width: 75%; max-width: 660px;" />

Normally, the default values should be good enough to use. Make sure that you choose <b>Listen to remote JVM</b>
as <i>Debugger mode</i> and select the right JDK version to generate proper <i>Command line arguments for remote JVM</i>.

Once you finish configuration and save it. You can follow <i>Run > Run > Your_Remote_Debug_Name > Debug</i> to start remote debug
process and wait for SBT console to connect:

<img src="/images/intellij_start_remote_debug.png" style="width: 75%; max-width: 660px;" />

<h5>Trigger the remote debugging</h5>

In general, there are 2 steps:
1. Set JVM options using the <i>Command line arguments for remote JVM</i> generated in the last step.
2. Start the Spark execution (SBT test, pyspark test, spark-shell, etc.)

The following is an example of how to trigger the remote debugging using SBT unit tests.

Enter in SBT console
```
./build/sbt
```
Switch to project where the target test locates, e.g.:
```
sbt > project core
```
Copy pasting the <i>Command line arguments for remote JVM</i>
```
sbt > set javaOptions in Test += "-agentlib:jdwp=transport=dt_socket,server=n,suspend=n,address=localhost:5005"
```
Set breakpoints with IntelliJ and run the test with SBT, e.g.:
```
sbt > testOnly *SparkContextSuite -- -t "Only one SparkContext may be active at a time"
```

It should be successfully connected to IntelliJ when you see "Connected to the target VM, 
address: 'localhost:5005', transport: 'socket'" in IntelliJ console. And then, you can start
debug in IntelliJ as usual.
 
To exit remote debug mode (so that you don't have to keep starting the remote debugger),
type "session clear" in SBT console while you're in a project.

<h4>Eclipse</h4>

Eclipse can be used to develop and test Spark. The following configuration is known to work:

- Eclipse Juno
- <a href="http://scala-ide.org/">Scala IDE 4.0</a>
- Scala Test

The easiest way is to download the Scala IDE bundle from the Scala IDE download page. It comes 
pre-installed with ScalaTest. Alternatively, use the Scala IDE update site or Eclipse Marketplace.

SBT can create Eclipse `.project` and `.classpath` files. To create these files for each Spark sub 
project, use this command:

```
sbt/sbt eclipse
```

To import a specific project, e.g. spark-core, select `File | Import | Existing Projects` into 
Workspace. Do not select "Copy projects into workspace".

If you want to develop on Scala 2.10 you need to configure a Scala installation for the 
exact Scala version that’s used to compile Spark. 
 Since Scala IDE bundles the latest versions (2.10.5 and 2.11.8 at this point), you need to add one 
in `Eclipse Preferences -> Scala -> Installations` by pointing to the `lib/` directory of your 
Scala 2.10.5 distribution. Once this is done, select all Spark projects and right-click, 
choose `Scala -> Set Scala Installation` and point to the 2.10.5 installation. 
This should clear all errors about invalid cross-compiled libraries. A clean build should succeed now.

ScalaTest can execute unit tests by right clicking a source file and selecting `Run As | Scala Test`.

If Java memory errors occur, it might be necessary to increase the settings in `eclipse.ini` 
in the Eclipse install directory. Increase the following setting as needed:

```
--launcher.XXMaxPermSize
256M
```

<a name="nightly-builds"></a>
<h3>Nightly Builds</h3>

Spark publishes SNAPSHOT releases of its Maven artifacts for both master and maintenance 
branches on a nightly basis. To link to a SNAPSHOT you need to add the ASF snapshot 
repository to your build. Note that SNAPSHOT artifacts are ephemeral and may change or
be removed. To use these you must add the ASF snapshot repository at 
<a href="https://repository.apache.org/snapshots/<a>.

```
groupId: org.apache.spark
artifactId: spark-core_2.12
version: 3.0.0-SNAPSHOT
```

<a name="profiling"></a>
<h3>Profiling Spark Applications Using YourKit</h3>

Here are instructions on profiling Spark applications using YourKit Java Profiler.

<h4>On Spark EC2 images</h4>

- After logging into the master node, download the YourKit Java Profiler for Linux from the 
<a href="https://www.yourkit.com/download/index.jsp">YourKit downloads page</a>. 
This file is pretty big (~100 MB) and YourKit downloads site is somewhat slow, so you may 
consider mirroring this file or including it on a custom AMI.
- Unzip this file somewhere (in `/root` in our case): `unzip YourKit-JavaProfiler-2017.02-b66.zip`
- Copy the expanded YourKit files to each node using copy-dir: `~/spark-ec2/copy-dir /root/YourKit-JavaProfiler-2017.02`
- Configure the Spark JVMs to use the YourKit profiling agent by editing `~/spark/conf/spark-env.sh` 
and adding the lines
```
SPARK_DAEMON_JAVA_OPTS+=" -agentpath:/root/YourKit-JavaProfiler-2017.02/bin/linux-x86-64/libyjpagent.so=sampling"
export SPARK_DAEMON_JAVA_OPTS
SPARK_EXECUTOR_OPTS+=" -agentpath:/root/YourKit-JavaProfiler-2017.02/bin/linux-x86-64/libyjpagent.so=sampling"
export SPARK_EXECUTOR_OPTS
```
- Copy the updated configuration to each node: `~/spark-ec2/copy-dir ~/spark/conf/spark-env.sh`
- Restart your Spark cluster: `~/spark/bin/stop-all.sh` and `~/spark/bin/start-all.sh`
- By default, the YourKit profiler agents use ports `10001-10010`. To connect the YourKit desktop
application to the remote profiler agents, you'll have to open these ports in the cluster's EC2 
security groups. To do this, sign into the AWS Management Console. Go to the EC2 section and 
select `Security Groups` from the `Network & Security` section on the left side of the page. 
Find the security groups corresponding to your cluster; if you launched a cluster named `test_cluster`, 
then you will want to modify the settings for the `test_cluster-slaves` and `test_cluster-master` 
security groups. For each group, select it from the list, click the `Inbound` tab, and create a 
new `Custom TCP Rule` opening the port range `10001-10010`. Finally, click `Apply Rule Changes`. 
Make sure to do this for both security groups.
Note: by default, `spark-ec2` re-uses security groups: if you stop this cluster and launch another 
cluster with the same name, your security group settings will be re-used.
- Launch the YourKit profiler on your desktop.
- Select "Connect to remote application..." from the welcome screen and enter the the address of your Spark master or worker machine, e.g. `ec2--.compute-1.amazonaws.com`
- YourKit should now be connected to the remote profiling agent. It may take a few moments for profiling information to appear.

Please see the full YourKit documentation for the full list of profiler agent
<a href="https://www.yourkit.com/docs/java/help/startup_options.jsp">startup options</a>.
 
<h4>In Spark unit tests</h4>

When running Spark tests through SBT, add `javaOptions in Test += "-agentpath:/path/to/yjp"`
to `SparkBuild.scala` to launch the tests with the YourKit profiler agent enabled.  
The platform-specific paths to the profiler agents are listed in the 
<a href="http://www.yourkit.com/docs/80/help/agent.jsp">YourKit documentation</a>.
