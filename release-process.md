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

<h2>Preparing Spark for Release</h2>

The main step towards preparing a release is to create a release branch. This is done via
standard Git branching mechanism and should be announced to the community once the branch is
created. It is also good to set up Jenkins jobs for the release branch once it is cut to
ensure tests are passing (consult Josh Rosen and Shane Knapp for help with this).

<h3>Cutting a Release Candidate</h3>

If this is not the first RC, then make sure that the JIRA issues that have been solved since the
last RC are marked as `Resolved` and has a `Target Versions` set to this release version.


To track any issue with pending PR targeting this release, create a filter in JIRA with a query like this
`project = SPARK AND "Target Version/s" = "12340470" AND status in (OPEN, "In Progress")`


For target version string value to use, find the numeric value corresponds to the release by looking into
an existing issue with that target version and click on the version (eg. find an issue targeting 2.2.1
and click on the version link of its Target Versions field)


Verify from `git log` whether they are actually making it in the new RC or not. Check for JIRA issues
with `release-notes` label, and make sure they are documented in relevant migration guide for breaking
changes or in the release news on the website later.


Also check that all build and test passes are green from the RISELab Jenkins: https://amplab.cs.berkeley.edu/jenkins/ particularly look for Spark Packaging, QA Compile, QA Test.
Note that not all permutations are run on PR therefore it is important to check Jenkins runs.


The process of cutting a release candidate has been partially automated via the RISELab Jenkins. There are
Jenkins jobs that can tag a release candidate and create various packages based on that candidate.
At present the Jenkins jobs *SHOULD NOT BE USED* as they use a legacy shared key for signing.


Instead much of the same release logic can be accessed in `dev/create-release/release-tag.sh` and `dev/create-release/release-build.sh`. The general order of creating a release using the scripts is:

- Verify Jenkins test pass on your desired commit
- Set the shell environment variables used by the scripts (run with "help" for details)
- Verify your JAVA_HOME is set to the correct Java version (2.2+ Java 8, pre-2.2 Java 7)
- You may find Felix's docker env useful - https://github.com/felixcheung/spark-build/blob/master/Dockerfile .
- Ensure you have the required dependencies to build the docs `docs/README.md`
- R, for CRAN packaging tests, requires e1071 to be installed as part of the packaging tests.
- In addition R uses LaTeX for some things, and requires some additional fonts. On Debian based systems you may wish to install `texlive-fonts-recommended` and `texlive-fonts-extra`.
- Make sure you required Python packages for packaging (see `dev/requirements.txt`)
- Tag the release candidate with `dev/create-release/release-tag.sh` (e.g. for creating 2.1.2 RC2 we did `ASF_USERNAME=holden ASF_PASSWORD=yoursecretgoeshere GIT_NAME="Holden Karau" GIT_BRANCH=branch-2.1 GIT_EMAIL="holden@us.ibm.com" RELEASE_VERSION=2.1.2 RELEASE_TAG=v2.1.2-rc2 NEXT_VERSION=2.1.3-SNAPSHOT ./dev/create-release/release-tag.sh`)
- Package the release binaries & sources with `dev/create-release/release-build.sh package`
- Create the release docs with `dev/create-release/release-build.sh docs`
- For Spark versions prior to 2.1.2, change the SPARK_VERSION from X.Y.Z to X.Y.Z-rcA then run `dev/create-release/release-build.sh publish-release`.
- Publish a snapshot to the Apache release repo `dev/create-release/release-build.sh publish-release`
- If you are a new Release Manager, update the KEYS file with your code signing key https://www.apache.org/dev/openpgp.html#export-public-key

```
# Move dev/ to release/ when the voting is completed. See Finalize the Release below
svn co "https://dist.apache.org/repos/dist/dev/spark" svn-spark
# edit svn-spark/KEYS file
svn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"
```

If the Jenkins jobs have been updated to support signing with your key you can look at the job required for a release are located in the [Spark Release Jobs](https://amplab.cs.berkeley.edu/jenkins/view/Spark%20Release/) collection.
If you don't have access, talk to a previous release manager for guidance and to get access.
The jobs can be launched with "Build with Parameters" and the general order is:

- Create a tag for the current RC with [spark-release-tag](https://amplab.cs.berkeley.edu/jenkins/view/Spark%20Release/job/spark-release-tag/) job.
- Kick off the rest of the jobs except spark-release-publish after the current RC has been configured.
- Once the packaging and doc jobs have finished kick off the [spark-release-publish](https://amplab.cs.berkeley.edu/jenkins/view/Spark%20Release/job/spark-release-publish) job.

The jobs are configured through build parameters. If the build parameters are unclear you can look at previous releases or if available, the recommended process is to ask the previous release manager to walk you through the Jenkins jobs as this document may not be 100% up to date.

<h3>Call a Vote on the Release Candidate</h3>

The release voting takes place on the Apache Spark developers list (the PMC is voting).
Look at past voting threads to see how this proceeds. The email should follow
<a href="https://mail-archives.apache.org/mod_mbox/spark-dev/201407.mbox/%3cCABPQxss7Cf+YaUuxCk0jnusH4207hCP4dkWn3BWFSvdnD86HHQ@mail.gmail.com%3e">this format</a>.

- Make a shortened link to the full list of JIRAs using <a href="https://s.apache.org/">https://s.apache.org/</a>
- If possible, attach a draft of the release notes with the email
- Make sure the voting closing time is in UTC format. Use this script to generate it
- Make sure the email is in text format and the links are correct

Once the vote is done, you should also send out a summary email with the totals, with a subject
that looks something like `[RESULT] [VOTE]...`.

<h3>Finalize the Release</h3>

**Be Careful!**

**THIS STEP IS IRREVERSIBLE so make sure you selected the correct staging repository. Once you
move the artifacts into the release folder, they cannot be removed.**

After the vote passes, for Maven, find the staging repository and click Release and confirm. To upload the
binaries to Apache mirrors, you move the binaries from dev directory (this should be where they are voted)
to release directory. This "moving" is the only way you can add stuff to the actual release directory.

```
# Checkout the Spark directory in Apache distribution SVN "dev" repo
$ svn co https://dist.apache.org/repos/dist/dev/spark/

# Move the sub-directory in "dev" to the
# corresponding directory in "release"
$ export SVN_EDITOR=vim
$ svn mv https://dist.apache.org/repos/dist/dev/spark/spark-1.1.1-rc2 https://dist.apache.org/repos/dist/release/spark/spark-1.1.1
```

Verify that the resources are present in <a href="https://www.apache.org/dist/spark/">https://www.apache.org/dist/spark/</a>.
It may take a while for them to be visible. This will be mirrored throughout the Apache network.
There are a few remaining steps.

<h4>Upload to PyPI</h4>

Uploading to PyPI is done after the release has been uploaded to Apache. To get started, go to the <a href="https://pypi.python.org">PyPI website</a> and log in with the spark-upload account (see the PMC mailing list for account permissions).


Once you have logged in it is time to register the new release, on the <a href="https://pypi.python.org/pypi?%3Aaction=submit_form">submitting package information</a> page by uploading the PKG-INFO file from inside the pyspark packaged artifact.


Once the release has been registered you can upload the artifacts
to the <b>legacy</b> pypi interface, using <a href="https://pypi.python.org/pypi/twine">twine</a>.
If you don't have twine setup you will need to create a .pypirc file with the reository pointing to `https://upload.pypi.org/legacy/` and the same username and password for the spark-upload account.

In the release directory run `twine upload -r legacy pyspark-version.tar.gz pyspark-version.tar.gz.asc`.
If for some reason the twine upload is incorrect (e.g. http failure or other issue), you can rename the artifact to `pyspark-version.post0.tar.gz`, delete the old artifact from PyPI and re-upload.



<h4>Remove Old Releases from Mirror Network</h4>

Spark always keeps two releases in the mirror network: the most recent release on the current and
previous branches. To delete older versions simply use svn rm. The `downloads.js` file in the
website `js/` directory must also be updated to reflect the changes. For instance, the two
releases should be 1.1.1 and 1.0.2, but not 1.1.1 and 1.1.0.

```
$ svn rm https://dist.apache.org/repos/dist/release/spark/spark-1.1.0
```

<h4>Update the Spark Apache Repository</h4>

Check out the tagged commit for the release candidate that passed and apply the correct version tag.

```
$ git checkout v1.1.1-rc2 # the RC that passed
$ git tag v1.1.1
$ git push apache v1.1.1

# Verify that the tag has been applied correctly
# If so, remove the old tag
$ git push apache :v1.1.1-rc2
$ git tag -d v1.1.1-rc2
```

Next, update remaining version numbers in the release branch. If you are doing a patch release,
see the similar commit made after the previous release in that branch. For example, for branch 1.0,
see <a href="https://github.com/apache/spark/commit/2a5514f7dcb9765b60cb772b97038cbbd1b58983">this example commit</a>.

In general, the rules are as follows:

- `grep` through the repository to find such occurrences
- References to the version just released. Upgrade them to next release version. If it is not a
documentation related version (e.g. inside `spark/docs/` or inside `spark/python/epydoc.conf`),
add `-SNAPSHOT` to the end.
- References to the next version. Ensure these already have `-SNAPSHOT`.

<!--
<h4>Update the EC2 Scripts</h4>

Upload the binary packages to the S3 bucket s3n://spark-related-packages (ask pwendell to do this). Then, change the init scripts in mesos/spark-ec2 repository to pull new binaries (see this example commit).
For Spark 1.1+, update branch v4+
For Spark 1.1, update branch v3+
For Spark 1.0, update branch v3+
For Spark 0.9, update branch v2+
You can audit the ec2 set-up by launching a cluster and running this audit script. Make sure you create cluster with default instance type (m1.xlarge).
-->

<h4>Update the Spark Website</h4>

The website repository is located at
<a href="https://github.com/apache/spark-website">https://github.com/apache/spark-website</a>.
Ensure the docs were generated with the PRODUCTION=1 environment variable.

```
# Build the latest docs
$ git checkout v1.1.1
$ cd docs
$ PRODUCTION=1 jekyll build

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
(all the HTML file changes are generated by `jekyll`).
In particular, update `documentation.md` to add link to `docs` for the previous release. Add
the new release to `js/downloads.js`. Check `security.md` for anything to update.

```
$ git add 1.1.1
$ git commit -m "Add docs for Spark 1.1.1"
```

Then, create the release notes. Go to the
<a href="https://issues.apache.org/jira/projects/SPARK?selectedItem=com.atlassian.jira.jira-projects-plugin:release-page">release page in JIRA</a>,
pick the release version from the list, then click on "Release Notes". Copy this URL and then make a short URL on
<a href="https://s.apache.org/">s.apache.org</a>, sign in to your Apache account, and pick the ID as something like
`spark-2.1.2`. Create a new release post under `releases/_posts` to include this short URL.

Then run `jekyll build` to update the `site` directory.

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
which fetches potential replacements from Github and JIRA. For instance:

```
$ cd release-spark/dev/create-release
# Set RELEASE_TAG and PREVIOUS_RELEASE_TAG
$ vim generate-contributors.py
# Generate initial contributors list, likely with warnings
$ ./generate-contributors.py
# Set JIRA_USERNAME, JIRA_PASSWORD, and GITHUB_API_TOKEN
$ vim release-spark/dev/translate-contributors.py
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
`news/_posts` and then run `jekyll build`.

Enjoy an adult beverage of your choice, and congratulations on making a Spark release.
