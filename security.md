---
layout: global
title: Security
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h2>Reporting Security Issues</h2>

Apache Spark uses the standard process outlined by the [Apache Security Team](https://www.apache.org/security/)
for reporting vulnerabilities. Note that vulnerabilities should not be publicly disclosed until the project has
responded.

To report a possible security vulnerability, please email `security@apache.org`. This is a
non-public list that will reach the Apache Security team, as well as the Spark PMC.

<h2>Known Security Issues</h2>

<h3 id="CVE-2018-11770">CVE-2018-11770: Apache Spark standalone master, Mesos REST APIs not controlled by authentication</h3>

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:

- Spark versions from 1.3.0, running standalone master with REST API enabled, or running Mesos master with cluster mode enabled

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


<h3 id="CVE-2018-8024">CVE-2018-8024: Apache Spark XSS vulnerability in UI</h3>

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

<h3 id="CVE-2018-1334">CVE-2018-1334: Apache Spark local privilege escalation vulnerability</h3>

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

<h3 id="CVE-2017-12612">CVE-2017-12612 Unsafe deserialization in Apache Spark launcher API</h3>

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

<h3 id="CVE-2017-7678">CVE-2017-7678 Apache Spark XSS web UI MHTML vulnerability</h3>

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
