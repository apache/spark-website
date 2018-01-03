---
layout: global
title: Committers
type: "page singular"
navigation:
  weight: 5
  show: true
---
<h2>Current Committers</h2>

|Name|Organization|
|----|------------|
|Sameer Agarwal|Databricks|
|Michael Armbrust|Databricks|
|Joseph Bradley|Databricks|
|Felix Cheung|Microsoft|
|Mosharaf Chowdhury|University of Michigan, Ann Arbor|
|Jason Dai|Intel|
|Tathagata Das|Databricks|
|Ankur Dave|UC Berkeley|
|Aaron Davidson|Databricks|
|Thomas Dudziak|Facebook|
|Robert Evans|Oath|
|Wenchen Fan|Databricks|
|Joseph Gonzalez|UC Berkeley|
|Thomas Graves|Oath|
|Stephen Haberman|Bizo|
|Mark Hamstra|ClearStory Data|
|Herman van Hovell|QuestTec B.V.|
|Yin Huai|Databricks|
|Shane Huang|Intel|
|Holden Karau|IBM|
|Andy Konwinski|Databricks|
|Hyukjin Kwon|Mobigen|
|Ryan LeCompte|Quantifind|
|Haoyuan Li|Alluxio, UC Berkeley|
|Xiao Li|Databricks|
|Davies Liu|Databricks|
|Cheng Lian|Databricks|
|Yanbo Liang|Hortonworks|
|Sean McNamara|Webtrends|
|Xiangrui Meng|Databricks|
|Mridul Muralidharam|Hortonworks|
|Andrew Or|Princeton University|
|Kay Ousterhout|UC Berkeley|
|Sean Owen|Cloudera|
|Tejas Patil|Facebook|
|Nick Pentreath|IBM|
|Imran Rashid|Cloudera|
|Charles Reiss|UC Berkeley|
|Josh Rosen|Databricks|
|Sandy Ryza|Remix|
|Kousuke Saruta|NTT Data|
|Saisai Shao|Hortonworks|
|Prashant Sharma|IBM|
|Ram Sriharsha|Databricks|
|DB Tsai|Netflix|
|Takuya Ueshin|Databricks|
|Marcelo Vanzin|Cloudera|
|Shivaram Venkataraman|UC Berkeley|
|Patrick Wendell|Databricks|
|Andrew Xia|Alibaba|
|Reynold Xin|Databricks|
|Burak Yavuz|Databricks|
|Matei Zaharia|Databricks, Stanford|
|Shixiong Zhu|Databricks|

<h3>Becoming a Committer</h3>

To get started contributing to Spark, learn 
<a href="{{site.baseurl}}/contributing.html">how to contribute</a> – 
anyone can submit patches, documentation and examples to the project.

The PMC regularly adds new committers from the active contributors, based on their contributions 
to Spark. The qualifications for new committers include:

1. Sustained contributions to Spark: Committers should have a history of major contributions to 
Spark. An ideal committer will have contributed broadly throughout the project, and have 
contributed at least one major component where they have taken an "ownership" role. An ownership 
role means that existing contributors feel that they should run patches for this component by 
this person.
2. Quality of contributions: Committers more than any other community member should submit simple, 
well-tested, and well-designed patches. In addition, they should show sufficient expertise to be 
able to review patches, including making sure they fit within Spark's engineering practices 
(testability, documentation, API stability, code style, etc). The committership is collectively 
responsible for the software quality and maintainability of Spark.
3. Community involvement: Committers should have a constructive and friendly attitude in all 
community interactions. They should also be active on the dev and user list and help mentor 
newer contributors and users. In design discussions, committers should maintain a professional 
and diplomatic approach, even in the face of disagreement.

The type and level of contributions considered may vary by project area -- for example, we 
greatly encourage contributors who want to work on mainly the documentation, or mainly on 
platform support for specific OSes, storage systems, etc.

<h3>Review Process</h3>

All contributions should be reviewed before merging as described in 
<a href="{{site.baseurl}}/contributing.html">Contributing to Spark</a>. 
In particular, if you are working on an area of the codebase you are unfamiliar with, look at the 
Git history for that code to see who reviewed patches before. You can do this using 
`git log --format=full <filename>`, by examining the "Commit" field to see who committed each patch.

<h3>How to Merge a Pull Request</h3>

Changes pushed to the master branch on Apache cannot be removed; that is, we can't force-push to 
it. So please don't add any test commits or anything like that, only real patches.

All merges should be done using the 
[dev/merge_spark_pr.py](https://github.com/apache/spark/blob/master/dev/merge_spark_pr.py) 
script, which squashes the pull request's changes into one commit. To use this script, you 
will need to add a git remote called "apache" at https://git-wip-us.apache.org/repos/asf/spark.git, 
as well as one called "apache-github" at `git://github.com/apache/spark`. For the `apache` repo, 
you can authenticate using your ASF username and password. Ask Patrick if you have trouble with 
this or want help doing your first merge.

The script is fairly self explanatory and walks you through steps and options interactively.

If you want to amend a commit before merging – which should be used for trivial touch-ups – 
then simply let the script wait at the point where it asks you if you want to push to Apache. 
Then, in a separate window, modify the code and push a commit. Run `git rebase -i HEAD~2` and 
"squash" your new commit. Edit the commit message just after to remove your commit message. 
You can verify the result is one change with `git log`. Then resume the script in the other window.

Also, please remember to set Assignee on JIRAs where applicable when they are resolved. The script 
can't do this automatically.
Once a PR is merged please leave a comment on the PR stating which branch(es) it has been merged with.

<!--
<h3>Minimize use of MINOR, BUILD, and HOTFIX with no JIRA</h3>

From pwendell at https://www.mail-archive.com/dev@spark.apache.org/msg09565.html:
It would be great if people could create JIRA's for any and all merged pull requests. The reason is 
that when patches get reverted due to build breaks or other issues, it is very difficult to keep 
track of what is going on if there is no JIRA. 
Here is a list of 5 patches we had to revert recently that didn't include a JIRA:
    Revert "[MINOR] [BUILD] Use custom temp directory during build."
    Revert "[SQL] [TEST] [MINOR] Uses a temporary log4j.properties in HiveThriftServer2Test to ensure expected logging behavior"
    Revert "[BUILD] Always run SQL tests in master build."
    Revert "[MINOR] [CORE] Warn users who try to cache RDDs with dynamic allocation on."
    Revert "[HOT FIX] [YARN] Check whether `/lib` exists before listing its files"

The cost overhead of creating a JIRA relative to other aspects of development is very small. 
If it's really a documentation change or something small, that's okay.

But anything affecting the build, packaging, etc. These all need to have a JIRA to ensure that 
follow-up can be well communicated to all Spark developers.
-->

<h3>Policy on Backporting Bug Fixes</h3>

From <a href="https://www.mail-archive.com/dev@spark.apache.org/msg10284.html">`pwendell`</a>:

The trade off when backporting is you get to deliver the fix to people running older versions 
(great!), but you risk introducing new or even worse bugs in maintenance releases (bad!). 
The decision point is when you have a bug fix and it's not clear whether it is worth backporting.

I think the following facets are important to consider:

- Backports are an extremely valuable service to the community and should be considered for 
any bug fix.
- Introducing a new bug in a maintenance release must be avoided at all costs. It over time would 
erode confidence in our release process.
- Distributions or advanced users can always backport risky patches on their own, if they see fit.

For me, the consequence of these is that we should backport in the following situations:

- Both the bug and the fix are well understood and isolated. Code being modified is well tested.
- The bug being addressed is high priority to the community.
- The backported fix does not vary widely from the master branch fix.

We tend to avoid backports in the converse situations:

- The bug or fix are not well understood. For instance, it relates to interactions between complex 
components or third party libraries (e.g. Hadoop libraries). The code is not well tested outside 
of the immediate bug being fixed.
- The bug is not clearly a high priority for the community.
- The backported fix is widely different from the master branch fix.
