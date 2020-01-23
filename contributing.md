---
layout: global
title: Contributing to Spark
type: "page singular"
navigation:
  weight: 5
  show: true
---

This guide documents the best way to make various types of contribution to Apache Spark, 
including what is required before submitting a code change.

Contributing to Spark doesn't just mean writing code. Helping new users on the mailing list, 
testing releases, and improving documentation are also welcome. In fact, proposing significant 
code changes usually requires first gaining experience and credibility within the community by 
helping in other ways. This is also a guide to becoming an effective contributor.

So, this guide organizes contributions in order that they should probably be considered by new 
contributors who intend to get involved long-term. Build some track record of helping others, 
rather than just open pull requests.

<h2>Contributing by Helping Other Users</h2>

A great way to contribute to Spark is to help answer user questions on the `user@spark.apache.org` 
mailing list or on StackOverflow. There are always many new Spark users; taking a few minutes to 
help answer a question is a very valuable community service.

Contributors should subscribe to this list and follow it in order to keep up to date on what's 
happening in Spark. Answering questions is an excellent and visible way to help the community, 
which also demonstrates your expertise.

See the <a href="{{site.baseurl}}/mailing-lists.html">Mailing Lists guide</a> for guidelines 
about how to effectively participate in discussions on the mailing list, as well as forums 
like StackOverflow.

<h2>Contributing by Testing Releases</h2>

Spark's release process is community-oriented, and members of the community can vote on new 
releases on the `dev@spark.apache.org` mailing list. Spark users are invited to subscribe to 
this list to receive announcements, and test their workloads on newer release and provide 
feedback on any performance or correctness issues found in the newer release.

<h2>Contributing by Reviewing Changes</h2>

Changes to Spark source code are proposed, reviewed and committed via 
<a href="https://github.com/apache/spark/pulls">Github pull requests</a> (described later). 
Anyone can view and comment on active changes here. 
Reviewing others' changes is a good way to learn how the change process works and gain exposure 
to activity in various parts of the code. You can help by reviewing the changes and asking 
questions or pointing out issues -- as simple as typos or small issues of style.
See also <a href="https://spark-prs.appspot.com/">https://spark-prs.appspot.com/</a> for a
convenient way to view and filter open PRs.

<h2>Contributing Documentation Changes</h2>

To propose a change to _release_ documentation (that is, docs that appear under 
<a href="https://spark.apache.org/docs/">https://spark.apache.org/docs/</a>), 
edit the Markdown source files in Spark's 
<a href="https://github.com/apache/spark/tree/master/docs">`docs/`</a> directory, 
whose `README` file shows how to build the documentation locally to test your changes.
The process to propose a doc change is otherwise the same as the process for proposing code 
changes below. 

To propose a change to the rest of the documentation (that is, docs that do _not_ appear under 
<a href="https://spark.apache.org/docs/">https://spark.apache.org/docs/</a>), similarly, edit the Markdown in the 
<a href="https://github.com/apache/spark-website">spark-website repository</a> and open a pull request.

<h2>Contributing User Libraries to Spark</h2>

Just as Java and Scala applications can access a huge selection of libraries and utilities, 
none of which are part of Java or Scala themselves, Spark aims to support a rich ecosystem of 
libraries. Many new useful utilities or features belong outside of Spark rather than in the core. 
For example: language support probably has to be a part of core Spark, but, useful machine 
learning algorithms can happily exist outside of MLlib.

To that end, large and independent new functionality is often rejected for inclusion in Spark 
itself, but, can and should be hosted as a separate project and repository, and included in 
the <a href="https://spark-packages.org/">spark-packages.org</a> collection.

<h2>Contributing Bug Reports</h2>

Ideally, bug reports are accompanied by a proposed code change to fix the bug. This isn't 
always possible, as those who discover a bug may not have the experience to fix it. A bug 
may be reported by creating a JIRA but without creating a pull request (see below).

Bug reports are only useful however if they include enough information to understand, isolate 
and ideally reproduce the bug. Simply encountering an error does not mean a bug should be 
reported; as below, search JIRA and search and inquire on the Spark user / dev mailing lists 
first. Unreproducible bugs, or simple error reports, may be closed.

It's very helpful if the bug report has a description about how the bug was introduced, by 
which commit, so that reviewers can easily understand the bug. It also helps committers to 
decide how far the bug fix should be backported, when the pull request is merged. The pull 
request to fix the bug should narrow down the problem to the root cause.

Performance regression is also one kind of bug. The pull request to fix a performance regression 
must provide a benchmark to prove the problem is indeed fixed.

Note that, data correctness/data loss bugs are very serious. Make sure the corresponding bug 
report JIRA ticket is labeled as `correctness` or `data-loss`. If the bug report doesn't get 
enough attention, please send an email to `dev@spark.apache.org`, to draw more attentions.

It is possible to propose new features as well. These are generally not helpful unless 
accompanied by detail, such as a design document and/or code change. Large new contributions 
should consider <a href="https://spark-packages.org/">spark-packages.org</a> first (see above), 
or be discussed on the mailing 
list first. Feature requests may be rejected, or closed after a long period of inactivity.

<h2>Contributing to JIRA Maintenance</h2>

Given the sheer volume of issues raised in the Apache Spark JIRA, inevitably some issues are 
duplicates, or become obsolete and eventually fixed otherwise, or can't be reproduced, or could 
benefit from more detail, and so on. It's useful to help identify these issues and resolve them, 
either by advancing the discussion or even resolving the JIRA. Most contributors are able to 
directly resolve JIRAs. Use judgment in determining whether you are quite confident the issue 
should be resolved, although changes can be easily undone. If in doubt, just leave a comment 
on the JIRA.

When resolving JIRAs, observe a few useful conventions:

- Resolve as **Fixed** if there's a change you can point to that resolved the issue
  - Set Fix Version(s), if and only if the resolution is Fixed
  - Set Assignee to the person who most contributed to the resolution, which is usually the person 
  who opened the PR that resolved the issue.
  - In case several people contributed, prefer to assign to the more 'junior', non-committer contributor
- For issues that can't be reproduced against master as reported, resolve as **Cannot Reproduce**
  - Fixed is reasonable too, if it's clear what other previous pull request resolved it. Link to it.
- If the issue is the same as or a subset of another issue, resolved as **Duplicate**
  - Make sure to link to the JIRA it duplicates
  - Prefer to resolve the issue that has less activity or discussion as the duplicate
- If the issue seems clearly obsolete and applies to issues or components that have changed 
radically since it was opened, resolve as **Not a Problem**
- If the issue doesn't make sense – not actionable, for example, a non-Spark issue, resolve 
as **Invalid**
- If it's a coherent issue, but there is a clear indication that there is not support or interest 
in acting on it, then resolve as **Won't Fix**
- Umbrellas are frequently marked **Done** if they are just container issues that don't correspond 
to an actionable change of their own

<h2>Preparing to Contribute Code Changes</h2>

<h3>Choosing What to Contribute</h3>

Spark is an exceptionally busy project, with a new JIRA or pull request every few hours on average. 
Review can take hours or days of committer time. Everyone benefits if contributors focus on 
changes that are useful, clear, easy to evaluate, and already pass basic checks.

Sometimes, a contributor will already have a particular new change or bug in mind. If seeking 
ideas, consult the list of starter tasks in JIRA, or ask the `user@spark.apache.org` mailing list.

Before proceeding, contributors should evaluate if the proposed change is likely to be relevant, 
new and actionable:

- Is it clear that code must change? Proposing a JIRA and pull request is appropriate only when a 
clear problem or change has been identified. If simply having trouble using Spark, use the mailing 
lists first, rather than consider filing a JIRA or proposing a change. When in doubt, email 
`user@spark.apache.org` first about the possible change
- Search the `user@spark.apache.org` and `dev@spark.apache.org` mailing list 
<a href="{{site.baseurl}}/community.html#mailing-lists">archives</a> for 
related discussions. Use <a href="http://search-hadoop.com/?q=&fc_project=Spark">search-hadoop.com</a> 
or similar search tools. 
Often, the problem has been discussed before, with a resolution that doesn't require a code 
change, or recording what kinds of changes will not be accepted as a resolution.
- Search JIRA for existing issues: 
<a href="https://issues.apache.org/jira/browse/SPARK">https://issues.apache.org/jira/browse/SPARK</a> 
- Type `spark [search terms]` at the top right search box. If a logically similar issue already 
exists, then contribute to the discussion on the existing JIRA and pull request first, instead of 
creating a new one.
- Is the scope of the change matched to the contributor's level of experience? Anyone is qualified 
to suggest a typo fix, but refactoring core scheduling logic requires much more understanding of 
Spark. Some changes require building up experience first (see above).

It's worth reemphasizing that changes to the core of Spark, or to highly complex and important modules
like SQL and Catalyst, are more difficult to make correctly. They will be subjected to more scrutiny,
and held to a higher standard of review than changes to less critical code.

<h3>MLlib-specific Contribution Guidelines</h3>

While a rich set of algorithms is an important goal for MLLib, scaling the project requires 
that maintainability, consistency, and code quality come first. New algorithms should:

- Be widely known
- Be used and accepted (academic citations and concrete use cases can help justify this)
- Be highly scalable
- Be well documented
- Have APIs consistent with other algorithms in MLLib that accomplish the same thing
- Come with a reasonable expectation of developer support.
- Have `@Since` annotation on public classes, methods, and variables.

<h3>Code Review Criteria</h3>

Before considering how to contribute code, it's useful to understand how code is reviewed, 
and why changes may be rejected. See the 
<a href="https://google.github.io/eng-practices/review/">detailed guide for code reviewers</a> 
from Google's Engineering Practices documentation. 
Simply put, changes that have many or large 
positives, and few negative effects or risks, are much more likely to be merged, and merged quickly. 
Risky and less valuable changes are very unlikely to be merged, and may be rejected outright 
rather than receive iterations of review.

<h4>Positives</h4>

- Fixes the root cause of a bug in existing functionality
- Adds functionality or fixes a problem needed by a large number of users
- Simple, targeted
- Maintains or improves consistency across Python, Java, Scala
- Easily tested; has tests
- Reduces complexity and lines of code
- Change has already been discussed and is known to committers

<h4>Negatives, Risks</h4>

- Band-aids a symptom of a bug only
- Introduces complex new functionality, especially an API that needs to be supported
- Adds complexity that only helps a niche use case
- Adds user-space functionality that does not need to be maintained in Spark, but could be hosted 
externally and indexed by <a href="https://spark-packages.org/">spark-packages.org</a> 
- Changes a public API or semantics (rarely allowed)
- Adds large dependencies
- Changes versions of existing dependencies
- Adds a large amount of code
- Makes lots of modifications in one "big bang" change

<h2>Contributing Code Changes</h2>

Please review the preceding section before proposing a code change. This section documents how to do so.

**When you contribute code, you affirm that the contribution is your original work and that you 
license the work to the project under the project's open source license. Whether or not you state 
this explicitly, by submitting any copyrighted material via pull request, email, or other means 
you agree to license the material under the project's open source license and warrant that you 
have the legal authority to do so.**

<h3>Cloning the Apache Spark source code</h3>

If you are interested in working with the newest under-development code or contributing to Apache Spark development, you can check out the master branch from Git:

    # Master development branch
    git clone git://github.com/apache/spark.git

Once you've downloaded Spark, you can find instructions for installing and building it on the <a href="{{site.baseurl}}/documentation.html">documentation page</a>.

<h3>JIRA</h3>

Generally, Spark uses JIRA to track logical issues, including bugs and improvements, and uses 
Github pull requests to manage the review and merge of specific code changes. That is, JIRAs are 
used to describe _what_ should be fixed or changed, and high-level approaches, and pull requests 
describe _how_ to implement that change in the project's source code. For example, major design 
decisions are discussed in JIRA.

1. Find the existing Spark JIRA that the change pertains to.
    1. Do not create a new JIRA if creating a change to address an existing issue in JIRA; add to 
    the existing discussion and work instead
    1. Look for existing pull requests that are linked from the JIRA, to understand if someone is 
    already working on the JIRA
1. If the change is new, then it usually needs a new JIRA. However, trivial changes, where the
what should change is virtually the same as the how it should change do not require a JIRA. 
Example: `Fix typos in Foo scaladoc`
1. If required, create a new JIRA:
    1. Provide a descriptive Title. "Update web UI" or "Problem in scheduler" is not sufficient.
    "Kafka Streaming support fails to handle empty queue in YARN cluster mode" is good.
    1. Write a detailed Description. For bug reports, this should ideally include a short 
    reproduction of the problem. For new features, it may include a design document.
    1. Set required fields:
        1. **Issue Type**. Generally, Bug, Improvement and New Feature are the only types used in Spark.
        1. **Priority**. Set to Major or below; higher priorities are generally reserved for 
        committers to set. The main exception is correctness or data-loss issues, which can be flagged as
        Blockers. JIRA tends to unfortunately conflate "size" and "importance" in its 
        Priority field values. Their meaning is roughly:
             1. Blocker: pointless to release without this change as the release would be unusable 
             to a large minority of users. Correctness and data loss issues should be considered Blockers.
             1. Critical: a large minority of users are missing important functionality without 
             this, and/or a workaround is difficult
             1. Major: a small minority of users are missing important functionality without this, 
             and there is a workaround
             1. Minor: a niche use case is missing some support, but it does not affect usage or 
             is easily worked around
             1. Trivial: a nice-to-have change but unlikely to be any problem in practice otherwise 
        1. **Component**
        1. **Affects Version**. For Bugs, assign at least one version that is known to exhibit the 
        problem or need the change
        1. **Label**. Not widely used, except for the following:
             - `correctness`: a correctness issue
             - `data-loss`: a data loss issue
             - `release-notes`: the change's effects need mention in release notes. The JIRA or pull request
             should include detail suitable for inclusion in release notes -- see "Docs Text" below.
             - `starter`: small, simple change suitable for new contributors
        1. **Docs Text**: For issues that require an entry in the release notes, this should contain the
        information that the release manager should include in Release Notes. This should include a short summary
        of what behavior is impacted, and detail on what behavior changed. It can be provisionally filled out
        when the JIRA is opened, but will likely need to be updated with final details when the issue is
        resolved.
    1. Do not set the following fields:
        1. **Fix Version**. This is assigned by committers only when resolved.
        1. **Target Version**. This is assigned by committers to indicate a PR has been accepted for 
        possible fix by the target version.
    1. Do not include a patch file; pull requests are used to propose the actual change.
1. If the change is a large change, consider inviting discussion on the issue at 
`dev@spark.apache.org` first before proceeding to implement the change.

<h3>Pull Request</h3>

1. <a href="https://help.github.com/articles/fork-a-repo/">Fork</a> the Github repository at 
<a href="https://github.com/apache/spark">https://github.com/apache/spark</a> if you haven't already
1. Clone your fork, create a new branch, push commits to the branch.
1. Consider whether documentation or tests need to be added or updated as part of the change, 
and add them as needed.
      1. When you add tests, make sure the tests are self-descriptive.
      1. Also, you should consider writing a JIRA ID in the tests when your pull request targets to fix
      a specific issue. In practice, usually it is added when a JIRA type is a bug or a PR adds
      a couple of tests to an existing test class. See the examples below:
          - Scala
            ```
            test("SPARK-12345: a short description of the test") {
              ...
            ```
          - Java
            ```
            @Test
            public void testCase() {
              // SPARK-12345: a short description of the test
              ...
            ```
          - Python
            ```
            def test_case(self):
                # SPARK-12345: a short description of the test
                ...
            ```
          - R
            ```
            test_that("SPARK-12345: a short description of the test", {
              ...
            ```
1. Run all tests with `./dev/run-tests` to verify that the code still compiles, passes tests, and 
passes style checks. If style checks fail, review the Code Style Guide below.
1. <a href="https://help.github.com/articles/using-pull-requests/">Open a pull request</a> against 
the `master` branch of `apache/spark`. (Only in special cases would the PR be opened against other branches.)
     1. The PR title should be of the form `[SPARK-xxxx][COMPONENT] Title`, where `SPARK-xxxx` is 
     the relevant JIRA number, `COMPONENT `is one of the PR categories shown at 
     <a href="https://spark-prs.appspot.com/">spark-prs.appspot.com</a> and 
     Title may be the JIRA's title or a more specific title describing the PR itself.
     1. If the pull request is still a work in progress, and so is not ready to be merged, 
     but needs to be pushed to Github to facilitate review, then add `[WIP]` after the component.
     1. Consider identifying committers or other contributors who have worked on the code being 
     changed. Find the file(s) in Github and click "Blame" to see a line-by-line annotation of 
     who changed the code last. You can add `@username` in the PR description to ping them 
     immediately.
     1. Please state that the contribution is your original work and that you license the work 
     to the project under the project's open source license.
1. The related JIRA, if any, will be marked as "In Progress" and your pull request will 
automatically be linked to it. There is no need to be the Assignee of the JIRA to work on it, 
though you are welcome to comment that you have begun work.
1. The Jenkins automatic pull request builder will test your changes
     1. If it is your first contribution, Jenkins will wait for confirmation before building 
     your code and post "Can one of the admins verify this patch?"
     1. A committer can authorize testing with a comment like "ok to test"
     1. A committer can automatically allow future pull requests from a contributor to be 
     tested with a comment like "Jenkins, add to whitelist"
1. After about 2 hours, Jenkins will post the results of the test to the pull request, along 
with a link to the full results on Jenkins.
1. Watch for the results, and investigate and fix failures promptly
     1. Fixes can simply be pushed to the same branch from which you opened your pull request
     1. Jenkins will automatically re-test when new commits are pushed
     1. If the tests failed for reasons unrelated to the change (e.g. Jenkins outage), then a 
     committer can request a re-test with "Jenkins, retest this please".
     Ask if you need a test restarted. If you were added by "Jenkins, add to whitelist" from a
     committer before, you can also request the re-test.
1. If there is a change related to SparkR in your pull request, AppVeyor will be triggered
automatically to test SparkR on Windows, which takes roughly an hour. Similarly to the steps
above, fix failures and push new commits which will request the re-test in AppVeyor.

<h3>The Review Process</h3>

- Other reviewers, including committers, may comment on the changes and suggest modifications. 
Changes can be added by simply pushing more commits to the same branch.
- Lively, polite, rapid technical debate is encouraged from everyone in the community. The outcome 
may be a rejection of the entire change.
- Keep in mind that changes to more critical parts of Spark, like its core and SQL components, will
be subjected to more review, and may require more testing and proof of its correctness than
other changes.
- Reviewers can indicate that a change looks suitable for merging with a comment such as: "I think 
this patch looks good". Spark uses the LGTM convention for indicating the strongest level of 
technical sign-off on a patch: simply comment with the word "LGTM". It specifically means: "I've 
looked at this thoroughly and take as much ownership as if I wrote the patch myself". If you 
comment LGTM you will be expected to help with bugs or follow-up issues on the patch. Consistent, 
judicious use of LGTMs is a great way to gain credibility as a reviewer with the broader community.
- Sometimes, other changes will be merged which conflict with your pull request's changes. The 
PR can't be merged until the conflict is resolved. This can be resolved by, for example, adding a remote
to keep up with upstream changes by `git remote add upstream https://github.com/apache/spark.git`,
running `git fetch upstream` followed by `git rebase upstream/master` and resolving the conflicts by hand,
then pushing the result to your branch.
- Try to be responsive to the discussion rather than let days pass between replies

<h3>Closing Your Pull Request / JIRA</h3>

- If a change is accepted, it will be merged and the pull request will automatically be closed, 
along with the associated JIRA if any
  - Note that in the rare case you are asked to open a pull request against a branch besides 
  `master`, that you will actually have to close the pull request manually
  - The JIRA will be Assigned to the primary contributor to the change as a way of giving credit. 
  If the JIRA isn't closed and/or Assigned promptly, comment on the JIRA.
- If your pull request is ultimately rejected, please close it promptly
  - ... because committers can't close PRs directly
  - Pull requests will be automatically closed by an automated process at Apache after about a 
  week if a committer has made a comment like "mind closing this PR?" This means that the 
  committer is specifically requesting that it be closed.
- If a pull request has gotten little or no attention, consider improving the description or 
the change itself and ping likely reviewers again after a few days. Consider proposing a 
change that's easier to include, like a smaller and/or less invasive change.
- If it has been reviewed but not taken up after weeks, after soliciting review from the 
most relevant reviewers, or, has met with neutral reactions, the outcome may be considered a 
"soft no". It is helpful to withdraw and close the PR in this case.
- If a pull request is closed because it is deemed not the right approach to resolve a JIRA, 
then leave the JIRA open. However if the review makes it clear that the issue identified in 
the JIRA is not going to be resolved by any pull request (not a problem, won't fix) then also 
resolve the JIRA.

<a name="code-style-guide"></a>
<h2>Code Style Guide</h2>

Please follow the style of the existing codebase.

- For Python code, Apache Spark follows 
<a href="http://legacy.python.org/dev/peps/pep-0008/">PEP 8</a> with one exception: 
lines can be up to 100 characters in length, not 79.
- For R code, Apache Spark follows
<a href="https://google.github.io/styleguide/Rguide.xml">Google's R Style Guide</a> with three exceptions:
lines can be up to 100 characters in length, not 80, there is no limit on function name but it has a initial
lower case latter and S4 objects/methods are allowed.
- For Java code, Apache Spark follows
<a href="http://www.oracle.com/technetwork/java/codeconvtoc-136057.html">Oracle's Java code conventions</a> and
Scala guidelines below. The latter is preferred.
- For Scala code, Apache Spark follows the official 
<a href="http://docs.scala-lang.org/style/">Scala style guide</a> and
<a href="https://github.com/databricks/scala-style-guide">Databricks Scala guide</a>. The latter is preferred. To format Scala code, run ./dev/scalafmt prior to submitting a PR.

<h3>If in Doubt</h3>

If you're not sure about the right style for something, try to follow the style of the existing 
codebase. Look at whether there are other examples in the code that use your feature. Feel free 
to ask on the `dev@spark.apache.org` list as well and/or ask committers.
