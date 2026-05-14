---
layout: global
title: Versioning Policy
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h2>Versioning policy</h2>

Starting with Spark 1.0.0, the Spark project will follow the 
<a href="http://semver.org/">semantic versioning guidelines</a> with a few deviations. 
These small differences account for Spark's nature as a multi-module project.

<h3>Spark versions</h3>

Each Spark release will be versioned: `[MAJOR].[FEATURE].[MAINTENANCE]`

- **MAJOR**: Major releases occur annually, third-party dependency 
upgrades, and major code refactoring. All releases with the same major version number will have 
API compatibility.
- **FEATURE**: Feature releases occur quarterly (every 3 months) and contain new features, performance 
improvements, API additions, and bug fixes. To ensure safe and predictable upgrades for downstream 
projects, feature releases have the following compatibility:
  - No third-party dependency upgrades (e.g. Parquet, Arrow, ORC, Hadoop, Netty).
  - No behavior or semantic changes (e.g. SQL semantics, execution behavior, optimizer behavior, 
  configuration defaults). Exceptions might occur case by case (e.g., security issues).
  - Public APIs may be added but not changed or removed.

Each feature release will have a merge window where new patches can be merged, a QA window when 
only fixes can be merged, then a final period where voting occurs on release candidates. These 
windows will be announced immediately after the previous feature release to give people plenty 
of time.
- **MAINTENANCE**: Maintenance releases will occur on an ad hoc basis depending on specific patches 
introduced (e.g. critical bug fixes and security patches) and their urgency. In general these releases 
are designed to patch bugs. However, higher level libraries may introduce small features, such as a 
new algorithm, provided they are entirely additive and isolated from existing code paths. Spark core 
may not introduce any features.

<h3>Alpha components</h3>

When new components are added to Spark, they may initially be marked as "alpha". Alpha components 
do not have to abide by the above guidelines, however, to the maximum extent possible, they should 
try to. Once they are marked "stable" they have to follow these guidelines.

<h3>API compatibility</h3>

In general, An API is any public class or interface documented in Spark, e.g., <a href="https://spark.apache.org/docs/latest/api/scala/org/apache/spark/index.html">ScalaDoc</a>.
We try to guarantee both source compatibility and binary compatibility between releases.

Note, however, that even for features "developer API" and "experimental", we strive to maintain 
maximum compatibility. Code should not be merged into the project as "experimental" if there is 
a plan to change the API later, because users expect the maximum compatibility from all 
available APIs.

<h3>Considerations when breaking APIs</h3>

The Spark project strives to avoid breaking APIs or silently changing behavior, even at major versions. While this is not always possible, the balance of the following factors should be considered before choosing to break an API.

<h4>Cost of breaking an API</h4>

Breaking an API almost always has a non-trivial cost to the users of Spark. A broken API means that Spark programs need to be rewritten before they can be upgraded. However, there are a few considerations when thinking about what the cost will be:

- **Usage** - an API that is actively used in many different places, is always very costly to break. While it is hard to know usage for sure, there are a bunch of ways that we can estimate: 
  - How long has the API been in Spark?

  - Is the API common even for basic programs?

  - How often do we see recent questions in JIRA or mailing lists?

  - How often does it appear in StackOverflow or blogs?

- **Behavior after the break** - How will a program that works today, work after the break? The following are listed roughly in order of increasing severity:

  - Will there be a compiler or linker error?

  - Will there be a runtime exception?

  - Will that exception happen after significant processing has been done?

  - Will we silently return different answers? (very hard to debug, might not even notice!)

<h4>Cost of maintaining an API</h4>

Of course, the above does not mean that we will **never** break **any** APIs. We must also consider the cost both to the project and to our users of keeping the API in question.

- **Project Costs** - Every API we have needs to be tested and needs to keep working as other parts of the project changes. These costs are significantly exacerbated when external dependencies change (the JVM, Scala, etc). In some cases, while not completely technically infeasible, the cost of maintaining a particular API can become too high.

- **User Costs** - APIs also have a cognitive cost to users learning Spark or trying to understand Spark programs. This cost becomes even higher when the API in question has confusing or undefined semantics.

<h4>Alternatives to breaking an API</h4>

In cases where there is a "Bad API", but where the cost of removal is also high, there are alternatives that should be considered that do not hurt existing users but do address some of the maintenance costs.

- **Avoid Bad APIs** - While this is a bit obvious, it is an important point. Anytime we are adding a new interface to Spark we should consider that we might be stuck with this API forever. Think deeply about how new APIs relate to existing ones, as well as how you expect them to evolve over time.

- **Deprecation Warnings** - All deprecation warnings should point to a clear alternative and should never just say that an API is deprecated.

- **Updated Docs** - Documentation should point to the "best" recommended way of performing a given task. In the cases where we maintain legacy documentation, we should clearly point to newer APIs and suggest to users the "right" way.

- **Community Work** - Many people learn Spark by reading blogs and other sites such as StackOverflow. However, many of these resources are out of date. Update them, to reduce the cost of eventually removing deprecated APIs.

<h2>Release cadence</h2>

Starting with Spark 4.3, feature releases occur quarterly (every 3 months), containing new features, 
improvements, and bug fixes. Major releases occur annually (every 12 months), allowing breaking 
changes and dependency upgrades. Maintenance releases happen as needed in between for critical 
bug fixes and security patches.

<h3>Spark 4.2 release window</h3>

| Date  | Event |
| ----- | ----- |
| May 1st 2026 | Code freeze. Release branch cut.|
| Mid May 2026 | QA period. Focus on bug fixes, tests, stability and docs. Generally, no new features merged.|
| Late May 2026 | Release candidates (RC), voting, etc. until final release passes|

<h2>Maintenance releases and EOL</h2>

The following table summarizes the maintenance window for each release type:

| Release Type | Cadence | Maintenance Window |
| ----- | ----- | ----- |
| Feature (x.y) | Every 3 months | 6 months |
| LTS (final feature of a major) | Every 12 months | 18 months |
| Maintenance (x.y.z) | Ad hoc | N/A (patches only) |

Non-LTS feature release branches will, generally, be maintained with bug fix releases for a period of 
6 months.

The final feature release within a major release will be designated as the "LTS" (Long-Term Support) release
and will be maintained for 18 months. For example, Spark 4.5 (the final 4.x feature release) would be 
maintained for 18 months from its release date. LTS releases provide a stable target for ecosystem 
projects and downstream vendors to standardize around.

Critical security patches will be backported to all actively maintained branches. Critical bug fixes 
(e.g., correctness issues) that may introduce behavior changes will be evaluated by the community 
on a case-by-case basis.

As an exception from the normal versioning policy, version 3.5.x has an "extended" LTS period to allow for migrations to be completed. This extended LTS period will end *November 2027*. During the 3.5.x extended LTS period, we will only include security fixes. This extended LTS only applies to the primary Apache Spark project/repo and does not apply to sub projects with separate repos/releases (namely: Spark Connect for Swift/Rust/Go and Spark Kubernetes operator). Additionally, as Java 8 support may be removed from other projects (including Hadoop), should a dependency have a security fix that is not backported to a Java 8 compatible version we may decide to mark that vulnerability as a won't fix or release the new version without Java 8 support.
