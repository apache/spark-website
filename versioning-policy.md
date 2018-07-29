---
layout: global
title: Versioning Policy
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h2>Versioning Policy</h2>

Starting with Spark 1.0.0, the Spark project will follow the 
<a href="http://semver.org/">semantic versioning guidelines</a> with a few deviations. 
These small differences account for Spark's nature as a multi-module project.

<h3>Spark Versions</h3>

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

<h3>Alpha Components</h3>

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

<h2>Release Cadence</h2>

In general, feature ("minor") releases occur about every 6 months. Hence, Spark 2.3.0 would
generally be released about 6 months after 2.2.0. Maintenance releases happen as needed.
A minor release usually sees 1-2 maintenance releases in the 6 months following its first
release. Major releases do not happen according to a fixed schedule.

<h3>Spark 2.4 Release Window</h3>

| Date  | | Event  |
| ----- |-| ------ |
| Mid Aug 2018 || Code freeze. Release branch cut.|
| Late Aug 2018 || QA period. Focus on bug fixes, tests, stability and docs. Generally, no new features merged.|
| Early Sep 2018 || Release candidates (RC), voting, etc. until final release passes|
