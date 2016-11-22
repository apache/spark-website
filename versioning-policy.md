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
The target frequency for feature releases is every 4 months. 
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

From Spark 2.0.0, in general, feature ("minor") releases occur every 4 months. Hence, Spark 2.2.0 would
generally be released about 4 months after 2.1.0. Maintenance releases happen as needed depending
on need. A minor release usually sees 1-2 maintenance releases in the 6 months following its first
release. Major releases do not happen according to a fixed schedule.

<h3>Spark 2.1 Release Window</h3>

| Date  | | Event  |
| ----- |-| ------ |
| ~ Nov 1 2016 || Code freeze. Release branch cut.|
| Early Nov 2016 || QA period. Focus on bug fixes, tests, stability and docs. Generally, no new features merged.|
| Late Nov 2016 || Release candidates (RC), voting, etc. until final release passes|

<h3>Spark 2.2 Release Window</h3>

| Date  | | Event  |
| ----- |-| ------ |
| ~ Mar 1 2017 || Code freeze. Release branch cut.|
| Early Mar 2017 || QA period. Focus on bug fixes, tests, stability and docs. Generally, no new features merged.|
| Late Mar 2017 || Release candidates (RC), voting, etc. until final release passes|
