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
for reporting vulnerabilities.

If you need to report a possible security vulnerability, please email `private@spark.apache.org`. This is a
non-public list that will reach the Spark PMC. Messages to `security@apache.org` will also reach the PMC. 

<h2>Known Security Issues</h2>

<h3 id="CVE-2017-12612">CVE-2017-12612 Unsafe deserialization in Apache Spark launcher API</h3>

JIRA: [SPARK-20922](https://issues.apache.org/jira/browse/SPARK-20922)

Severity: Medium

Vendor: The Apache Software Foundation

Versions Affected:
Versions of Apache Spark from 1.6.0 until 2.1.1

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

Severity: Low

Vendor: The Apache Software Foundation

Versions Affected:
Versions of Apache Spark before 2.1.2, 2.2.0

Description:
It is possible for an attacker to take advantage of a user's trust in the server to trick them into visiting a link that points to a shared Spark cluster and submits data including MHTML to the Spark master, or history server. This data, which could contain a script, would then be reflected back to the user and could be evaluated and executed by MS Windows-based clients. It is not an attack on Spark itself, but on the user, who may then execute the script inadvertently when viewing elements of the Spark web UIs.

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
