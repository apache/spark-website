---
layout: global
title: Spark Project Improvement Proposals (SPIP)
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h2>Spark Project Improvement Proposals (SPIP)</h2>

The purpose of an SPIP is to inform and involve the user community in major improvements to the Spark codebase throughout the development process, to increase the likelihood that user needs are met.

SPIPs should be used for significant user-facing or cross-cutting changes, not small incremental improvements. When in doubt, if a committer thinks a change needs an SPIP, it does.

<h3>What is a SPIP?</h3>

An SPIP is similar to a product requirement document commonly used in product management.

An SPIP:

- Is a JIRA ticket labeled “SPIP” proposing a major improvement or change to Spark
- Follows the template defined below
- Includes discussions on the JIRA ticket and dev@ list about the proposal

<a href="https://issues.apache.org/jira/issues/?jql=project%20%3D%20SPARK%20AND%20status%20in%20(Open%2C%20Reopened%2C%20%22In%20Progress%22)%20AND%20(labels%20%3D%20SPIP%20OR%20summary%20~%20%22SPIP%22)%20ORDER%20BY%20createdDate%20DESC">Current SPIPs</a>

<a href="https://issues.apache.org/jira/issues/?jql=project%20%3D%20SPARK%20AND%20status%20in%20(Resolved)%20AND%20(labels%20%3D%20SPIP%20OR%20summary%20~%20%22SPIP%22)%20ORDER%20BY%20createdDate%20DESC">Past SPIPs</a>

<h3>Who?</h3>

Any <strong>community member</strong> can help by discussing whether an SPIP is likely to meet their needs, and by proposing SPIPs.

<strong>Contributors</strong> can help by discussing whether an SPIP is likely to be technically feasible.

<strong>Committers</strong> can help by discussing whether an SPIP aligns with long-term project goals, and by shepherding SPIPs.

<strong>SPIP Author</strong> is any community member who authors a SPIP and is committed to pushing the change through the entire process. SPIP authorship can be transferred.

<strong>SPIP Shepherd</strong> is a PMC member who is committed to shepherding the proposed change throughout the entire process. Although the shepherd can delegate or work with other committers in the development process, the shepherd is ultimately responsible for the success or failure of the SPIP. Responsibilities of the shepherd include, but are not limited to:

- Be the advocate for the proposed change
- Help push forward on design and achieve consensus among key stakeholders
- Review code changes, making sure the change follows project standards
- Get feedback from users and iterate on the design & implementation
- Uphold the quality of the changes, including verifying whether the changes satisfy the goal of the SPIP and are absent of critical bugs before releasing them

<h3>SPIP Process</h3>
<h4>Proposing an SPIP</h4>

Anyone may propose an SPIP, using the document template below. Please only submit an SPIP if you are willing to help, at least with discussion.

After a SPIP is created, the author should email <a href="mailto:dev@spark.apache.org">dev@spark.apache.org</a> to notify the community of the SPIP, and discussions should ensue on the JIRA ticket.

If an SPIP is too small or incremental and should have been done through the normal JIRA process, a committer should remove the SPIP label.


<h4>SPIP Document Template</h4>

A SPIP document is a short document with a few questions, inspired by the Heilmeier Catechism:

<b>Q1.</b> What are you trying to do? Articulate your objectives using absolutely no jargon.

<b>Q2.</b> What problem is this proposal NOT designed to solve?

<b>Q3.</b> How is it done today, and what are the limits of current practice?

<b>Q4.</b> What is new in your approach and why do you think it will be successful?

<b>Q5.</b> Who cares? If you are successful, what difference will it make?

<b>Q6.</b> What are the risks?

<b>Q7.</b> How long will it take?

<b>Q8.</b> What are the mid-term and final “exams” to check for success?

<b>Appendix A.</b> Proposed API Changes. Optional section defining APIs changes, if any. Backward and forward compatibility must be taken into account.

<b>Appendix B.</b> Optional Design Sketch: How are the goals going to be accomplished? Give sufficient technical detail to allow a contributor to judge whether it's likely to be feasible. Note that this is not a full design document.

<b>Appendix C.</b> Optional Rejected Designs: What alternatives were considered? Why were they rejected? If no alternatives have been considered, the problem needs more thought.



<h4>Discussing an SPIP</h4>

All discussion of an SPIP should take place in a public forum, preferably the discussion attached to the Jira. Any discussions that happen offline should be made available online for the public via meeting notes summarizing the discussions.

During this discussion, one or more shepherds should be identified among PMC members.

Once the discussion settles, the shepherd(s) should call for a vote on the SPIP moving forward on the dev@ list. The vote should be open for at least 72 hours and follows the typical Apache vote process and passes upon consensus (at least 3 +1 votes from PMC members and no -1 votes from PMC members). dev@ should be notified of the vote result.

If there does not exist at least one PMC member that is committed to shepherding the change within a month, the SPIP is rejected.

If a committer does not think a SPIP aligns with long-term project goals, or is not practical at the point of proposal, the committer should -1 the SPIP explicitly and give technical justifications.


<h4>Implementing an SPIP</h4>

Implementation should take place via the <a href="{{site.baseurl}}/contributing.html">standard process for code changes</a>. Changes that require SPIPs typically also require design documents to be written and reviewed.
