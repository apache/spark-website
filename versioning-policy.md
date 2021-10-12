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

- **MAJOR**: All releases with the same major version number will have API compatibility.
Major version numbers will remain stable over long periods of time. For instance, 1.X.Y may last 
1 year or more.
- **FEATURE**: Feature releases will typically contain new features, improvements, and bug fixes. 
Each feature release will have a merge window where new patches can be merged, a QA window when 
only fixes can be merged, then a final period where voting occurs on release candidates. These 
windows will be announced immediately after the previous feature release to give people plenty 
of time, and over time, we might make the whole release process more regular (similar to Ubuntu).
- **MAINTENANCE**: Maintenance releases will occur more frequently and depend on specific patches 
introduced (e.g. bug fixes) and their urgency. In general these releases are designed to patch bugs. 
However, higher level libraries may introduce small features, such as a new algorithm, provided 
they are entirely additive and isolated from existing code paths. Spark core may not introduce 
any features.

<h3>Alpha components</h3>

When new components are added to Spark, they may initially be marked as "alpha". Alpha components 
do not have to abide by the above guidelines, however, to the maximum extent possible, they should 
try to. Once they are marked "stable" they have to follow these guidelines.

<h3>API compatibility</h3>

An API is any public class or interface exposed in Spark that is not marked as "developer API" or 
"experimental". Release A is API compatible with release B if code compiled against release A 
_compiles cleanly_ against B. Currently, does not guarantee that a compiled application that is 
linked against version A will link cleanly against version B without re-compiling. Link-level 
compatibility is something we'll try to guarantee in future releases. 

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

In general, feature ("minor") releases occur about every 6 months. Hence, Spark 2.3.0 would
generally be released about 6 months after 2.2.0. Maintenance releases happen as needed
in between feature releases. Major releases do not happen according to a fixed schedule.

<h3>Spark 3.2 release window</h3>

| Date  | Event |
| ----- | ----- |
| July 1st 2021 | Code freeze. Release branch cut.|
| Mid July 2021 | QA period. Focus on bug fixes, tests, stability and docs. Generally, no new features merged.|
| August 2021 | Release candidates (RC), voting, etc. until final release passes|

<h2>Maintenance releases and EOL</h2>

Feature release branches will, generally, be maintained with bug fix releases for a period of 18 months. 
For example, branch 2.3.x is no longer considered maintained as of September 2019, 18 months after the release
of 2.3.0 in February 2018. No more 2.3.x releases should be expected after that point, even for bug fixes.

The last minor release within a major a release will typically be maintained for longer as an "LTS" release.
For example, 2.4.0 was released in November 2nd 2018 and had been maintained for 31 months until 2.4.8 was released on May 2021. 2.4.8 is the last release and no more 2.4.x releases should be expected even for bug fixes.

