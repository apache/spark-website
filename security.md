---
layout: global
title: Security
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h2>Security Model</h2>

For information on what security properties to expect from Apache Spark
and how to configure the various security features, see the
[Spark Security](https://spark.apache.org/docs/latest/security.html)
documentation.

<h2>Reporting security issues</h2>

Apache Spark uses the standard process outlined by the [Apache Security Team](https://www.apache.org/security/)
for reporting vulnerabilities. Note that vulnerabilities should not be publicly disclosed until the project has
responded.

To report a possible security vulnerability, please email `security@spark.apache.org`. This is a
non-public list that will reach the Apache Security team, as well as the Spark PMC.

<h2>Known security issues</h2>

<h3 id="CVE-2023-32007">CVE-2023-32007: Apache Spark shell command injection vulnerability via Spark UI</h3>

This CVE is only an update to [CVE-2022-33891](#CVE-2022-33891) to clarify that version 3.1.3 is also
affected. It is otherwise not a new vulnerability. Note that Apache Spark 3.1.x is EOL now.

<h3 id="CVE-2023-22946">CVE-2023-22946: Apache Spark proxy-user privilege escalation from malicious configuration class</h3>

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:

- Versions prior to 3.4.0

Description:

In Apache Spark versions prior to 3.4.0, applications using spark-submit can specify a 'proxy-user' to run as, 
limiting privileges. The application can execute code with the privileges of the submitting user, however, by 
providing malicious configuration-related classes on the classpath. This affects architectures relying on 
proxy-user, for example those using Apache Livy to manage submitted applications.

This issue is being tracked as SPARK-41958

Mitigation:

- Update to Apache Spark 3.4.0 or later, and ensure that `spark.submit.proxyUser.allowCustomClasspathInClusterMode` is set to its default of "false", and is not overridden by submitted applications.

Credit:

- Hideyuki Furue (finder)
- Yi Wu (Databricks) (remediation developer)


<h3 id="CVE-2022-31777">CVE-2022-31777: Apache Spark XSS vulnerability in log viewer UI Javascript</h3>

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:

- 3.2.1 and earlier
- 3.3.0

Description:

A stored cross-site scripting (XSS) vulnerability in Apache Spark 3.2.1 and earlier, and 3.3.0, allows remote 
attackers to execute arbitrary JavaScript in the web browser of a user, by including a malicious payload into 
the logs which would be returned in logs rendered in the UI.

Mitigation:

- Upgrade to Spark 3.2.2, or 3.3.1 or later

Credit:

- Florian Walter (Veracode)


<h3 id="CVE-2022-33891">CVE-2022-33891: Apache Spark shell command injection vulnerability via Spark UI</h3>

Severity: Important

Vendor: The Apache Software Foundation

Versions Affected:

- 3.1.3 and earlier (previously, this was marked as fixed in 3.1.3; this change is tracked as [CVE-2023-32007](#CVE-2023-32007))
- 3.2.0 to 3.2.1

Description:

The Apache Spark UI offers the possibility to enable ACLs via the configuration option spark.acls.enable. 
With an authentication filter, this checks whether a user has access permissions to view or modify the application. 
If ACLs are enabled, a code path in HttpSecurityFilter can allow someone to perform impersonation by providing an 
arbitrary user name. A malicious user might then be able to reach a permission check function that will ultimately 
build a Unix shell command based on their input, and execute it. This will result in arbitrary shell command 
execution as the user Spark is currently running as.

Mitigation

- Update to Spark 3.2.2, or 3.3.0 or later

Credit:

- Kostya Torchinsky (Databricks)


<h3 id="CVE-2021-38296">CVE-2021-38296: Apache Spark<span class="tm">&trade;</span> Key Negotiation Vulnerability</h3>

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:

- Apache Spark 3.1.2 and earlier

Description:

Apache Spark supports end-to-end encryption of RPC connections via `spark.authenticate` and `spark.network.crypto.enabled`. 
In versions 3.1.2 and earlier, it uses a bespoke mutual authentication protocol that allows for full encryption key 
recovery. After an initial interactive attack, this would allow someone to decrypt plaintext traffic offline. 
Note that this does not affect security mechanisms controlled by `spark.authenticate.enableSaslEncryption`, 
`spark.io.encryption.enabled`, `spark.ssl`, `spark.ui.strictTransportSecurity`.

Mitigation:

- Update to Spark 3.1.3 or later

Credit:

- Steve Weis (Databricks)


<h3 id="CVE-2020-9480">CVE-2020-9480: Apache Spark<span class="tm">&trade;</span> RCE vulnerability in auth-enabled standalone master</h3>

Severity: Important

Vendor: The Apache Software Foundation

Versions Affected:

- Apache Spark 2.4.5 and earlier

Description:

In Apache Spark 2.4.5 and earlier, a standalone resource manager's master may
be configured to require authentication (`spark.authenticate`) via a
shared secret. When enabled, however, a specially-crafted RPC to the
master can succeed in starting an application's resources on the Spark
cluster, even without the shared key. This can be leveraged to execute
shell commands on the host machine.

This does not affect Spark clusters using other resource managers
(YARN, Mesos, etc).


Mitigation:

- Users should update to Spark 2.4.6 or 3.0.0.
- Where possible, network access to the cluster machines should be restricted to trusted hosts only.

Credit:

- Ayoub Elaassal


<h3 id="CVE-2019-10099">CVE-2019-10099: Apache Spark<span class="tm">&trade;</span> unencrypted data on local disk</h3>

Severity: Important

Vendor: The Apache Software Foundation

Versions affected:
- All Spark 1.x, Spark 2.0.x, Spark 2.1.x, and 2.2.x versions
- Spark 2.3.0 to 2.3.2

Description:

Prior to Spark 2.3.3, in certain situations Spark would write user data to local disk unencrypted, even if `spark.io.encryption.enabled=true`.  This includes cached blocks that are fetched to disk (controlled by `spark.maxRemoteBlockSizeFetchToMem`); in SparkR, using parallelize; in Pyspark, using broadcast and parallelize; and use of python udfs.


Mitigation:

- 1.x, 2.0.x, 2.1.x, 2.2.x, 2.3.x  users should upgrade to 2.3.3 or newer, including 2.4.x

Credit:

- This issue was reported by Thomas Graves of NVIDIA.


<h3 id="CVE-2018-11760">CVE-2018-11760: Apache Spark<span class="tm">&trade;</span> local privilege escalation vulnerability</h3>

Severity: Important

Vendor: The Apache Software Foundation

Versions affected:

- All Spark 1.x, Spark 2.0.x, and Spark 2.1.x versions
- Spark 2.2.0 to 2.2.2
- Spark 2.3.0 to 2.3.1

Description:

When using PySpark, it's possible for a different local user
to connect to the Spark application and impersonate the user running
the Spark application.  This affects versions 1.x, 2.0.x, 2.1.x, 2.2.0 to 2.2.2, and 2.3.0 to 2.3.1.

Mitigation:

- 1.x, 2.0.x, 2.1.x, and 2.2.x users should upgrade to 2.2.3 or newer
- 2.3.x users should upgrade to 2.3.2 or newer
- Otherwise, affected users should avoid using PySpark in
multi-user environments.

Credit:

- Luca Canali and Jose Carlos Luna Duran, CERN



<h3 id="CVE-2018-17190">CVE-2018-17190: Unsecured Apache Spark<span class="tm">&trade;</span> standalone executes user code</h3>

Severity: Low

Vendor: The Apache Software Foundation

Versions Affected:

- All versions of Apache Spark

Description:

Spark's standalone resource manager accepts code to execute on a 'master' host, that then runs that code on 
'worker' hosts. The master itself does not, by design, execute user code. A specially-crafted request to the 
master can, however, cause the master to execute code too. Note that this does not affect standalone clusters 
with authentication enabled. While the master host typically has less outbound access to other resources 
than a worker, the execution of code on the master is nevertheless unexpected.

Mitigation:

Enable authentication on any Spark standalone cluster that is not otherwise secured
from unwanted access, for example by network-level restrictions. Use `spark.authenticate`
and related security properties described at [https://spark.apache.org/docs/latest/security.html](https://spark.apache.org/docs/latest/security.html)

Credit:

- Andre Protas, Apple Information Security


<h3 id="CVE-2018-11804">CVE-2018-11804: Apache Spark<span class="tm">&trade;</span> build/mvn runs zinc, and can expose information from build machines</h3>

Severity: Low

Vendor: The Apache Software Foundation

Versions Affected

- 2.1.x release branch and earlier
- 2.2.x release branch before Spark 2.2.3
- 2.3.x release branch before Spark 2.3.3

Description:

Spark's Apache Maven-based build includes a convenience script, 'build/mvn',
that downloads and runs a zinc server to speed up compilation. This server
will accept connections from external hosts by default. A specially-crafted
request to the zinc server could cause it to reveal information in files
readable to the developer account running the build. Note that this issue
does not affect end users of Spark, only developers building Spark from
source code.

Mitigation:

- Spark users are not affected, as zinc is only a part of the build process.
- Spark developers may simply use a local Maven installation's 'mvn' command to build, and avoid running build/mvn and zinc.
- Spark developers building actively-developed branches (2.2.x, 2.3.x, 2.4.x, master) may update their branches to receive mitigations already patched onto the build/mvn script
- Spark developers running zinc separately may include "-server 127.0.0.1" in its command line, and consider additional flags like "-idle-timeout 30m" to achieve similar mitigation.

Credit:

- Andre Protas, Apple Information Security


<h3 id="CVE-2018-11770">CVE-2018-11770: Apache Spark<span class="tm">&trade;</span> standalone master, Mesos REST APIs not controlled by authentication</h3>

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:

- Spark versions from 1.3.0, running standalone master with REST API enabled, or running Mesos master with cluster mode enabled; suggested mitigations resolved the issue as of Spark 2.4.0.

Description:

From version 1.3.0 onward, Spark's standalone master exposes a REST API for job submission, in addition 
to the submission mechanism used by `spark-submit`. In standalone, the config property 
`spark.authenticate.secret` establishes a shared secret for authenticating requests to submit jobs via 
`spark-submit`. However, the REST API does not use this or any other authentication mechanism, and this is 
not adequately documented. In this case, a user would be able to run a driver program without authenticating, 
but not launch executors, using the REST API. This REST API is also used by Mesos, when set up to run in 
cluster mode (i.e., when also running `MesosClusterDispatcher`), for job submission. Future versions of Spark 
will improve documentation on these points, and prohibit setting `spark.authenticate.secret` when running 
the REST APIs, to make this clear. Future versions will also disable the REST API by default in the 
standalone master by changing the default value of `spark.master.rest.enabled` to `false`.

Mitigation:

For standalone masters, disable the REST API by setting `spark.master.rest.enabled` to `false` if it is unused, 
and/or ensure that all network access to the REST API (port 6066 by default) is restricted to hosts that are 
trusted to submit jobs. Mesos users can stop the `MesosClusterDispatcher`, though that will prevent them 
from running jobs in cluster mode. Alternatively, they can ensure access to the `MesosRestSubmissionServer` 
(port 7077 by default) is restricted to trusted hosts.

Credit:

- Imran Rashid, Cloudera
- Fengwei Zhang, Alibaba Cloud Security Team


<h3 id="CVE-2018-8024">CVE-2018-8024: Apache Spark<span class="tm">&trade;</span> XSS vulnerability in UI</h3>

Severity: Medium

Versions Affected:

- Spark 2.1.0 through 2.1.2
- Spark 2.2.0 through 2.2.1
- Spark 2.3.0

Description:

In Apache Spark 2.1.0 to 2.1.2, 2.2.0 to 2.2.1, and 2.3.0, it's possible for a malicious 
user to construct a URL pointing to a Spark cluster's UI's job and stage info pages, and if a user can 
be tricked into accessing the URL, can be used to cause script to execute and expose information from 
the user's view of the Spark UI. While some browsers like recent versions of Chrome and Safari are 
able to block this type of attack, current versions of Firefox (and possibly others) do not.

Mitigation:

- 2.1.x users should upgrade to 2.1.3 or newer
- 2.2.x users should upgrade to 2.2.2 or newer
- 2.3.x users should upgrade to 2.3.1 or newer

Credit:

- Spencer Gietzen, Rhino Security Labs

<h3 id="CVE-2018-1334">CVE-2018-1334: Apache Spark<span class="tm">&trade;</span> local privilege escalation vulnerability</h3>

Severity: High

Vendor: The Apache Software Foundation

Versions affected:

- Spark versions through 2.1.2
- Spark 2.2.0 to 2.2.1
- Spark 2.3.0

Description:

In Apache Spark up to and including 2.1.2, 2.2.0 to 2.2.1, and 2.3.0, when using PySpark or SparkR, 
it's possible for a different local user to connect to the Spark application and impersonate the 
user running the Spark application.

Mitigation:

- 1.x, 2.0.x, and 2.1.x users should upgrade to 2.1.3 or newer
- 2.2.x users should upgrade to 2.2.2 or newer
- 2.3.x users should upgrade to 2.3.1 or newer
- Otherwise, affected users should avoid using PySpark and SparkR in multi-user environments.

Credit:

- Nehmé Tohmé, Cloudera, Inc.

<h3 id="CVE-2017-12612">CVE-2017-12612 Unsafe deserialization in Apache Spark<span class="tm">&trade;</span> launcher API</h3>

JIRA: [SPARK-20922](https://issues.apache.org/jira/browse/SPARK-20922)

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:

- Versions of Apache Spark from 1.6.0 until 2.1.1

Description:

In Apache Spark 1.6.0 until 2.1.1, the launcher API performs unsafe
deserialization of data received by  its socket. This makes applications
launched programmatically using the launcher API potentially
vulnerable to arbitrary code execution by an attacker with access to any user
account on the local machine. It does not affect apps run by spark-submit or
spark-shell. The attacker would be able to execute code as the user that ran
the Spark application. Users are encouraged to update to version 2.1.2, 2.2.0 or
later.

Mitigation:

Update to Apache Spark 2.1.2, 2.2.0 or later.

Credit:

- Aditya Sharad, Semmle

<h3 id="CVE-2017-7678">CVE-2017-7678 Apache Spark<span class="tm">&trade;</span> XSS web UI MHTML vulnerability</h3>

JIRA: [SPARK-20393](https://issues.apache.org/jira/browse/SPARK-20393)

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:

- Versions of Apache Spark before 2.1.2, 2.2.0

Description:

It is possible for an attacker to take advantage of a user's trust in the server to trick them into 
visiting a link that points to a shared Spark cluster and submits data including MHTML to the Spark 
master, or history server. This data, which could contain a script, would then be reflected back to 
the user and could be evaluated and executed by MS Windows-based clients. It is not an attack on Spark 
itself, but on the user, who may then execute the script inadvertently when viewing elements of the 
Spark web UIs.

Mitigation:

Update to Apache Spark 2.1.2, 2.2.0 or later.

Example:

Request:

```
GET /app/?appId=Content-Type:%20multipart/related;%20boundary=_AppScan%0d%0a--
_AppScan%0d%0aContent-Location:foo%0d%0aContent-Transfer-
Encoding:base64%0d%0a%0d%0aPGh0bWw%2bPHNjcmlwdD5hbGVydCgiWFNTIik8L3NjcmlwdD48L2h0bWw%2b%0d%0a
HTTP/1.1
```

Excerpt from response:

```
<div class="row-fluid">No running application with ID Content-Type: multipart/related;
boundary=_AppScan
--_AppScan
Content-Location:foo
Content-Transfer-Encoding:base64
PGh0bWw+PHNjcmlwdD5hbGVydCgiWFNTIik8L3NjcmlwdD48L2h0bWw+
</div>
```

Result: In the above payload the BASE64 data decodes as:

```
<html><script>alert("XSS")</script></html>
```

Credit:

- Mike Kasper, Nicholas Marion
- IBM z Systems Center for Secure Engineering
