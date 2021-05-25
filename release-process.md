---
layout: global
title: Release Process
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h2>Preparing Spark Releases</h2>

<h3>Background</h3>

The release manager role in Spark means you are responsible for a few different things:

1. Preparing your setup
1. Preparing for release candidates:
    1. cutting a release branch
    1. informing the community of timing
    1. working with component leads to clean up JIRA
    1. making code changes in that branch with necessary version updates
1. Running the voting process for a release:
    1. creating release candidates using automated tooling
    1. calling votes and triaging issues
1. Finalizing and posting a release:
    1. updating the Spark website
    1. writing release notes
    1. announcing the release

<h2>Preparing your setup</h2>

If you are a new Release Manager, you can read up on the process from the followings:

- release signing https://www.apache.org/dev/release-signing.html
- gpg for signing https://www.apache.org/dev/openpgp.html
- svn https://www.apache.org/dev/version-control.html#https-svn

<h3>Preparing gpg key</h3>

You can skip this section if you have already uploaded your key.

After generating the gpg key, you need to upload your key to a public key server. Please refer to
<a href="https://www.apache.org/dev/openpgp.html#generate-key">https://www.apache.org/dev/openpgp.html#generate-key</a>
for details.

If you want to do the release on another machine, you can transfer your secret key to that machine
via the `gpg --export-secret-keys` and `gpg --import` commands.

The last step is to update the KEYS file with your code signing key
<a href="https://www.apache.org/dev/openpgp.html#export-public-key">https://www.apache.org/dev/openpgp.html#export-public-key</a>

```
# Move dev/ to release/ when the voting is completed. See Finalize the Release below
svn co --depth=files "https://dist.apache.org/repos/dist/dev/spark" svn-spark
# edit svn-spark/KEYS file
svn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"
```

<h3>Installing docker</h3>

The scripts to create release candidates are run through docker. You need to install docker before running
these scripts. Please make sure that you can run docker as non-root users. See
<a href="https://docs.docker.com/install/linux/linux-postinstall/">https://docs.docker.com/install/linux/linux-postinstall</a>
for more details.

<h2>Preparing Spark for Release</h2>

The main step towards preparing a release is to create a release branch. This is done via
standard Git branching mechanism and should be announced to the community once the branch is
created.

It is also good to set up Jenkins jobs for the release branch once it is cut to
ensure tests are passing. These are jobs like
https://amplab.cs.berkeley.edu/jenkins/view/Spark%20QA%20Test/job/spark-branch-2.3-test-maven-hadoop-2.7/ .
Consult Josh Rosen and Shane Knapp for help with this. Also remember to add the newly-added jobs
to the test dashboard at https://amplab.cs.berkeley.edu/jenkins/view/Spark%20QA%20Test%20(Dashboard)/ .

<h3>Cutting a Release Candidate</h3>

If this is not the first RC, then make sure that the JIRA issues that have been solved since the
last RC are marked as `Resolved` and has a `Target Versions` set to this release version.


To track any issue with pending PR targeting this release, create a filter in JIRA with a query like this
`project = SPARK AND "Target Version/s" = "12340470" AND status in (Open, Reopened, "In Progress")`


For target version string value to use, find the numeric value corresponds to the release by looking into
an existing issue with that target version and click on the version (eg. find an issue targeting 2.2.1
and click on the version link of its Target Versions field)


Verify from `git log` whether they are actually making it in the new RC or not. Check for JIRA issues
with `release-notes` label, and make sure they are documented in relevant migration guide for breaking
changes or in the release news on the website later.


Also check that all build and test passes are green from the RISELab Jenkins: https://amplab.cs.berkeley.edu/jenkins/ particularly look for Spark Packaging, QA Compile, QA Test.
Note that not all permutations are run on PR therefore it is important to check Jenkins runs.


To cut a release candidate, there are 4 steps:
1. Create a git tag for the release candidate.
1. Package the release binaries & sources, and upload them to the Apache staging SVN repo.
1. Create the release docs, and upload them to the Apache staging SVN repo.
1. Publish a snapshot to the Apache staging Maven repo.

The process of cutting a release candidate has been automated via the `dev/create-release/do-release-docker.sh` script.
Run this script, type information it requires, and wait until it finishes. You can also do a single step via the `-s` option.
Please run `do-release-docker.sh -h` and see more details.

<h3>Call a Vote on the Release Candidate</h3>

The release voting takes place on the Apache Spark developers list (the PMC is voting).
Look at past voting threads to see how this proceeds. The email should follow
<a href="https://mail-archives.apache.org/mod_mbox/spark-dev/201407.mbox/%3cCABPQxss7Cf+YaUuxCk0jnusH4207hCP4dkWn3BWFSvdnD86HHQ@mail.gmail.com%3e">this format</a>.

- Make a shortened link to the full list of JIRAs using <a href="https://s.apache.org/">https://s.apache.org/</a>
- If possible, attach a draft of the release notes with the email
- Make sure the voting closing time is in UTC format. Use this script to generate it
- Make sure the email is in text format and the links are correct

Once the vote is done, you should also send out a summary email with the totals, with a subject
that looks something like `[VOTE][RESULT] ...`.

<h3>Finalize the Release</h3>

**Be Careful!**

**THIS STEP IS IRREVERSIBLE so make sure you selected the correct staging repository. Once you
move the artifacts into the release folder, they cannot be removed.**

After the vote passes, to upload the binaries to Apache mirrors, you move the binaries from dev directory (this should be where they are voted) to release directory. This "moving" is the only way you can add stuff to the actual release directory. (Note: only PMC can move to release directory)

```
# Move the sub-directory in "dev" to the
# corresponding directory in "release"
$ export SVN_EDITOR=vim
$ svn mv https://dist.apache.org/repos/dist/dev/spark/v1.1.1-rc2-bin https://dist.apache.org/repos/dist/release/spark/spark-1.1.1

# If you've added your signing key to the KEYS file, also update the release copy.
svn co --depth=files "https://dist.apache.org/repos/dist/release/spark" svn-spark
curl "https://dist.apache.org/repos/dist/dev/spark/KEYS" > svn-spark/KEYS
(cd svn-spark && svn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS")
```

Verify that the resources are present in <a href="https://www.apache.org/dist/spark/">https://www.apache.org/dist/spark/</a>.
It may take a while for them to be visible. This will be mirrored throughout the Apache network.
Check the release checker result of the release at <a href="https://checker.apache.org/projs/spark.html">https://checker.apache.org/projs/spark.html</a>.


For Maven Central Repository, you can Release from the <a href="https://repository.apache.org/">Apache Nexus Repository Manager</a>. This is already populated by the `release-build.sh publish-release` step. Log in, open Staging Repositories, find the one voted on (eg. orgapachespark-1257 for https://repository.apache.org/content/repositories/orgapachespark-1257/), select and click Release and confirm. If successful, it should show up under https://repository.apache.org/content/repositories/releases/org/apache/spark/spark-core_2.11/2.2.1/
and the same under https://repository.apache.org/content/groups/maven-staging-group/org/apache/spark/spark-core_2.11/2.2.1/ (look for the correct release version). After some time this will be sync'd to <a href="https://search.maven.org/">Maven Central</a> automatically.


<h4>Upload to PyPI</h4>

You'll need the credentials for the `spark-upload` account, which can be found in
<a href="https://lists.apache.org/thread.html/2789e448cd8a95361a3164b48f3f8b73a6d9d82aeb228bae2bc4dc7f@%3Cprivate.spark.apache.org%3E">this message</a>
(only visible to PMC members).

The artifacts can be uploaded using <a href="https://pypi.org/project/twine/">twine</a>. Just run:

```
twine upload --repository-url https://upload.pypi.org/legacy/ pyspark-{version}.tar.gz pyspark-{version}.tar.gz.asc
```

Adjusting the command for the files that match the new release. If for some reason the twine upload
is incorrect (e.g. http failure or other issue), you can rename the artifact to
`pyspark-version.post0.tar.gz`, delete the old artifact from PyPI and re-upload.


<h4>Publish to CRAN</h4>

Publishing to CRAN is done using <a href="https://cran.r-project.org/submit.html">this form</a>.
Since it requires further manual steps, please also contact the <a href="mailto:private@spark.apache.org">PMC</a>.


<h4> Remove RC artifacts from repositories</h4>

After the vote passes and you moved the approved RC to the release repository, you should delete
the RC directories from the staging repository. For example:

```
svn rm https://dist.apache.org/repos/dist/dev/spark/v2.3.1-rc1-bin/ \
  https://dist.apache.org/repos/dist/dev/spark/v2.3.1-rc1-docs/ \
  -m"Removing RC artifacts."
```

Make sure to also remove the unpublished staging repositories from the
<a href="https://repository.apache.org/">Apache Nexus Repository Manager</a>.


<h4>Remove Old Releases from Mirror Network</h4>

Spark always keeps the latest maintenance released of each branch in the mirror network.
To delete older versions simply use svn rm:

```
$ svn rm https://dist.apache.org/repos/dist/release/spark/spark-1.1.0
```

You will also need to update `js/download.js` to indicate the release is not mirrored
anymore, so that the correct links are generated on the site.


<h4>Update the Spark Apache Repository</h4>

Check out the tagged commit for the release candidate that passed and apply the correct version tag.

```
$ git tag v1.1.1 v1.1.1-rc2 # the RC that passed
$ git push apache v1.1.1
```

<h4>Update the version index of DocSearch</h4>
In the repository <a href="https://github.com/algolia/docsearch-configs">algolia/docsearch-configs</a>, submit a PR to add the new Spark version in <a href="https://github.com/algolia/docsearch-configs/blob/master/configs/apache_spark.json">apache_spark.json</a>.

<h4>Update the Spark Website</h4>

The website repository is located at
<a href="https://github.com/apache/spark-website">https://github.com/apache/spark-website</a>.

It's recommended to not remove the generated docs of the latest RC, so that we can copy it to
spark-website directly, otherwise you need to re-build the docs.

```
# Build the latest docs
$ git checkout v1.1.1
$ cd docs
$ PRODUCTION=1 bundle exec jekyll build

# Copy the new documentation to Apache
$ git clone https://github.com/apache/spark-website
...
$ cp -R _site spark-website/site/docs/1.1.1

# Update the "latest" link
$ cd spark/site/docs
$ rm latest
$ ln -s 1.1.1 latest
```

Next, update the rest of the Spark website. See how the previous releases are documented
(all the HTML file changes are generated by `jekyll`). In particular:

* update `_layouts/global.html` if the new release is the latest one
* update `documentation.md` to add link to the docs for the new release
* add the new release to `js/downloads.js`
* check `security.md` for anything to update

```
$ git add 1.1.1
$ git commit -m "Add docs for Spark 1.1.1"
```

Then, create the release notes. Go to the
<a href="https://issues.apache.org/jira/projects/SPARK?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page">release page in JIRA</a>,
pick the release version from the list, then click on "Release Notes". Copy this URL and then make a short URL on
<a href="https://s.apache.org/">s.apache.org</a>, sign in to your Apache account, and pick the ID as something like
`spark-2.1.2`. Create a new release post under `releases/_posts` to include this short URL. The date of the post should
be the date you create it.

Then run `bundle exec jekyll build` to update the `site` directory.

After merging the change into the `asf-site` branch, you may need to create a follow-up empty
commit to force synchronization between ASF's git and the web site, and also the GitHub mirror.
For some reason synchronization seems to not be reliable for this repository.

On a related note, make sure the version is marked as released on JIRA. Go find the release page as above, eg.,
`https://issues.apache.org/jira/projects/SPARK/versions/12340295`, and click the "Release" button on the right and enter the release date.

(Generally, this is only for major and minor, but not patch releases) The contributors list can be automatically generated through
<a href="https://github.com/apache/spark/blob/branch-1.1/dev/create-release/generate-contributors.py">this script</a>.
It accepts the tag that corresponds to the current release and another tag that
corresponds to the previous (not including maintenance release). For instance, if you are
releasing Spark 1.2.0, set the current tag to v1.2.0-rc2 and the previous tag to v1.1.0.
Once you have generated the initial contributors list, it is highly likely that there will be
warnings about author names not being properly translated. To fix this, run
<a href="https://github.com/apache/spark/blob/branch-1.1/dev/create-release/translate-contributors.py">this other script</a>,
which fetches potential replacements from GitHub and JIRA. For instance:

```
$ cd release-spark/dev/create-release
# Set RELEASE_TAG and PREVIOUS_RELEASE_TAG
$ export RELEASE_TAG=v1.1.1
$ export PREVIOUS_RELEASE_TAG=v1.1.0
# Generate initial contributors list, likely with warnings
$ ./generate-contributors.py
# set JIRA_USERNAME, JIRA_PASSWORD, and GITHUB_API_TOKEN
$ export JIRA_USERNAME=blabla
$ export JIRA_PASSWORD=blabla
$ export GITHUB_API_TOKEN=blabla
# Translate names generated in the previous step, reading from known_translations if necessary
$ ./translate-contributors.py
```

Additionally, if you wish to give more specific credit for developers of larger patches, you may
use the the following commands to identify large patches. Extra care must be taken to make sure
commits from previous releases are not counted since git cannot easily associate commits that
were back ported into different branches.

```
# Determine PR numbers closed only in the new release
$ git log v1.1.1 | grep "Closes #" | cut -d " " -f 5,6 | grep Closes | sort > closed_1.1.1
$ git log v1.1.0 | grep "Closes #" | cut -d " " -f 5,6 | grep Closes | sort > closed_1.1.0
$ diff --new-line-format="" --unchanged-line-format="" closed_1.1.1 closed_1.1.0 > diff.txt

# Grep expression with all new patches
$ EXPR=$(cat diff.txt | awk '{ print "\\("$1" "$2" \\)"; }' | tr "\n" "|" | sed -e "s/|/\\\|/g" | sed "s/\\\|$//")

# Contributor list
$ git shortlog v1.1.1 --grep "$EXPR" > contrib.txt

# Large patch list (300+ lines)
$ git log v1.1.1 --grep "$expr" --shortstat --oneline | grep -B 1 -e "[3-9][0-9][0-9] insert" -e "[1-9][1-9][1-9][1-9] insert" | grep SPARK > large-patches.txt
```

<h4>Create an Announcement</h4>

Once everything is working (website docs, website changes) create an announcement on the website
and then send an e-mail to the mailing list. To create an announcement, create a post under
`news/_posts` and then run `bundle exec jekyll build`.

Enjoy an adult beverage of your choice, and congratulations on making a Spark release.
