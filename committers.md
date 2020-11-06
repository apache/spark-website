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
|Sameer Agarwal|Facebook|
|Michael Armbrust|Databricks|
|Dilip Biswal|Adobe|
|Ryan Blue|Netflix|
|Joseph Bradley|Databricks|
|Matthew Cheah|Palantir|
|Felix Cheung|SafeGraph|
|Mosharaf Chowdhury|University of Michigan, Ann Arbor|
|Bryan Cutler|IBM|
|Jason Dai|Intel|
|Tathagata Das|Databricks|
|Ankur Dave|UC Berkeley|
|Aaron Davidson|Databricks|
|Thomas Dudziak|Facebook|
|Erik Erlandson|Red Hat|
|Robert Evans|NVIDIA|
|Wenchen Fan|Databricks|
|Huaxin Gao|IBM|
|Joseph Gonzalez|UC Berkeley|
|Thomas Graves|NVIDIA|
|Stephen Haberman|LinkedIn|
|Mark Hamstra|ClearStory Data|
|Seth Hendrickson|Cloudera|
|Herman van Hovell|Databricks|
|Liang-Chi Hsieh|Apple|
|Yin Huai|Databricks|
|Shane Huang|Intel|
|Dongjoon Hyun|Apple|
|Kazuaki Ishizaki|IBM|
|Xingbo Jiang|Databricks|
|Holden Karau|Apple|
|Shane Knapp|UC Berkeley|
|Cody Koeninger|Nexstar Digital|
|Andy Konwinski|Databricks|
|Hyukjin Kwon|Databricks|
|Ryan LeCompte|Quantifind|
|Haoyuan Li|Alluxio|
|Xiao Li|Databricks|
|Yinan Li|Google|
|Davies Liu|Juicedata|
|Cheng Lian|Databricks|
|Yanbo Liang|Facebook|
|Jungtaek Lim|Cloudera|
|Sean McNamara|Oracle|
|Xiangrui Meng|Databricks|
|Mridul Muralidharan|LinkedIn|
|Andrew Or|Princeton University|
|Kay Ousterhout|LightStep|
|Sean Owen|Databricks|
|Tejas Patil|Facebook|
|Nick Pentreath|IBM|
|Anirudh Ramanathan|Rockset|
|Imran Rashid|Cloudera|
|Charles Reiss|University of Virginia|
|Josh Rosen|Stripe|
|Sandy Ryza|Remix|
|Kousuke Saruta|NTT Data|
|Saisai Shao|Tencent|
|Prashant Sharma|IBM|
|Ram Sriharsha|Databricks|
|Jose Torres|Databricks|
|DB Tsai|Apple|
|Takuya Ueshin|Databricks|
|Marcelo Vanzin|Cloudera|
|Shivaram Venkataraman|University of Wisconsin, Madison|
|Gengliang Wang|Databricks|
|Yuming Wang|eBay|
|Zhenhua Wang|Huawei|
|Patrick Wendell|Databricks|
|Andrew Xia|Alibaba|
|Reynold Xin|Databricks|
|Weichen Xu|Databricks|
|Takeshi Yamamuro|NTT|
|Burak Yavuz|Databricks|
|Matei Zaharia|Databricks, Stanford|
|Ruifeng Zheng|JD.com|
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
responsible for the software quality and maintainability of Spark. Note that contributions to
critical parts of Spark, like its core and SQL modules, will be held to a higher standard when
assessing quality. Contributors to these areas will face more review of their changes.
3. Community involvement: Committers should have a constructive and friendly attitude in all 
community interactions. They should also be active on the dev and user list and help mentor 
newer contributors and users. In design discussions, committers should maintain a professional 
and diplomatic approach, even in the face of disagreement.

The type and level of contributions considered may vary by project area -- for example, we 
greatly encourage contributors who want to work on mainly the documentation, or mainly on 
platform support for specific OSes, storage systems, etc.

The PMC also adds new PMC members. PMC members are expected to carry out PMC 
responsibilities as described in [Apache Guidance](https://www.apache.org/dev/pmc.html#policy), including
helping vote on releases, enforce Apache project trademarks, take responsibility for legal and license issues,
and ensure the project follows Apache project mechanics. The PMC periodically adds committers to the PMC 
who have shown they understand and can help with these activities.

<h3>Review Process</h3>

All contributions should be reviewed before merging as described in 
<a href="{{site.baseurl}}/contributing.html">Contributing to Spark</a>. 
In particular, if you are working on an area of the codebase you are unfamiliar with, look at the 
Git history for that code to see who reviewed patches before. You can do this using 
`git log --format=full <filename>`, by examining the "Commit" field to see who committed each patch.

<h3>When to commit/merge a pull request</h3>

PRs shall not be merged during active, on-topic discussion unless they address issues such as critical security fixes of a public vulnerability. Under extenuating circumstances, PRs may be merged during active, off-topic discussion and the discussion directed to a more appropriate venue. Time should be given prior to merging for those involved with the conversation to explain if they believe they are on-topic.

Lazy consensus requires giving time for discussion to settle while understanding that people may not be working on Spark as their full-time job and may take holidays. It is believed that by doing this, we can limit how often people feel the need to exercise their veto.


All -1s with justification merit discussion.  A -1 from a non-committer can be overridden only with input from multiple committers, and suitable time must be offered for any committer to raise concerns. A -1 from a committer who cannot be reached requires a consensus vote of the PMC under ASF voting rules to determine the next steps within the [ASF guidelines for code vetoes](https://www.apache.org/foundation/voting.html).


These policies serve to reiterate the core principle that code must not be merged with a pending veto or before a consensus has been reached (lazy or otherwise).


It is the PMC’s hope that vetoes continue to be infrequent, and when they occur, that all parties will take the time to build consensus prior to additional feature work.


Being a committer means exercising your judgement while working in a community of people with diverse views. There is nothing wrong in getting a second (or third or fourth) opinion when you are uncertain. Thank you for your dedication to the Spark project; it is appreciated by the developers and users of Spark.


It is hoped that these guidelines do not slow down development; rather, by removing some of the uncertainty, the goal is to make it easier for us to reach consensus. If you have ideas on how to improve these guidelines or other Spark project operating procedures, you should reach out on the dev@ list to start the discussion.

<h3>How to Merge a Pull Request</h3>

Changes pushed to the master branch on Apache cannot be removed; that is, we can't force-push to 
it. So please don't add any test commits or anything like that, only real patches.

<h4>Setting up Remotes</h4>

To use the `merge_spark_pr.py` script described below, you 
will need to add a git remote called `apache` at `https://github.com/apache/spark`, 
as well as one called `apache-github` at `git://github.com/apache/spark`.

You will likely also have a remote `origin` pointing to your fork of Spark, and
`upstream` pointing to the `apache/spark` GitHub repo. 

If correct, your `git remote -v` should look like:

```
apache	https://github.com/apache/spark.git (fetch)
apache	https://github.com/apache/spark.git (push)
apache-github	git://github.com/apache/spark (fetch)
apache-github	git://github.com/apache/spark (push)
origin	https://github.com/[your username]/spark.git (fetch)
origin	https://github.com/[your username]/spark.git (push)
upstream	https://github.com/apache/spark.git (fetch)
upstream	https://github.com/apache/spark.git (push)
```

For the `apache` repo, you will need to set up command-line authentication to GitHub. This may
include setting up an SSH key and/or personal access token. See:

- https://help.github.com/articles/connecting-to-github-with-ssh/
- https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/

Ask `dev@spark.apache.org` if you have trouble with these steps, or want help doing your first merge.

<h4>Merge Script</h4>

All merges should be done using the 
[dev/merge_spark_pr.py](https://github.com/apache/spark/blob/master/dev/merge_spark_pr.py),
which squashes the pull request's changes into one commit.

The script is fairly self explanatory and walks you through steps and options interactively.

If you want to amend a commit before merging – which should be used for trivial touch-ups – 
then simply let the script wait at the point where it asks you if you want to push to Apache. 
Then, in a separate window, modify the code and push a commit. Run `git rebase -i HEAD~2` and 
"squash" your new commit. Edit the commit message just after to remove your commit message. 
You can verify the result is one change with `git log`. Then resume the script in the other window.

Also, please remember to set Assignee on JIRAs where applicable when they are resolved. The script 
can do this automatically in most cases. However where the contributor is not yet a part of the
Contributors group for the Spark project in ASF JIRA, it won't work until they are added. Ask
an admin to add the person to Contributors at 
https://issues.apache.org/jira/plugins/servlet/project-config/SPARK/roles .

Once a PR is merged please leave a comment on the PR stating which branch(es) it has been merged with.

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
