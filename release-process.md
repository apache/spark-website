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

<h2>Preparing Spark for Release</h2>

The main step towards preparing a release is to create a release branch. This is done via 
standard Git branching mechanism and should be announced to the community once the branch is 
created. It is also good to set up Jenkins jobs for the release branch once it is cut to 
ensure tests are passing (consult Josh Rosen and Shane Knapp for help with this).

Next, ensure that all Spark versions are correct in the code base on the release branch (see 
<a href="https://github.com/apache/spark/commit/01d233e4aede65ffa39b9d2322196d4b64186526">this example commit</a>).
You should grep through the codebase to find all instances of the version string. Some known 
places to change are:

- **SparkContext**. Search for VERSION (only for branch 1.x)
- **Maven build**. Ensure that the version in all the `pom.xml` files is `<SPARK-VERSION>-SNAPSHOT` 
(e.g. `1.1.1-SNAPSHOT`). This will be changed to `<SPARK-VERSION>` (e.g. 1.1.1) automatically by 
Maven when cutting the release. Note that there are a few exceptions that should just use 
`<SPARK-VERSION>`. These modules are not published as artifacts.
- **Spark REPLs**. Look for the Spark ASCII art in `SparkILoopInit.scala` for the Scala shell 
and in `shell.py` for the Python REPL.
- **Docs**. Search for VERSION in `docs/_config.yml`
- **PySpark**. Search for `__version__` in `python/pyspark/version.py`
- **SparkR**. Search for `Version` in `R/pkg/DESCRIPTION`

Finally, update `CHANGES.txt` with this script in the Spark repository. `CHANGES.txt` captures 
all the patches that have made it into this release candidate since the last release.

```
$ export SPARK_HOME=<your Spark home>
$ cd spark
# Update release versions
$ vim dev/create-release/generate-changelist.py
$ dev/create-release/generate-changelist.py
```

This produces a `CHANGES.txt.new` that should be a superset of the existing `CHANGES.txt`. 
Replace the old `CHANGES.txt` with the new one (see 
<a href="https://github.com/apache/spark/commit/131c62672a39a6f71f6834e9aad54b587237f13c">this example commit</a>).

<h3>Cutting a Release Candidate</h3>

If this is not the first RC, then make sure that the JIRA issues that have been solved since the 
last RC are marked as `FIXED` in this release version.

- A possible protocol for this is to mark such issues as `FIXED` in next maintenance release. 
For example if you are cutting RC for 1.0.2, mark such issues as `FIXED` in 1.0.3.
- When cutting new RC, find all the issues that are marked as `FIXED` for next maintenance 
release, and change them to the current release.
- Verify from `git log` whether they are actually making it in the new RC or not.

The process of cutting a release candidate has been automated via the AMPLab Jenkins. There are 
Jenkins jobs that can tag a release candidate and create various packages based on that candidate. 
The recommended process is to ask the previous release manager to walk you through the Jenkins jobs.

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

After the vote passes, find the staging repository and click Release and confirm. To upload the 
binaries, you have to first upload them to the dev directory in the Apache Distribution repo, 
and then move the binaries from dev directory to release directory. This "moving" is the only
 way you can add stuff to the actual release directory.

```
# Checkout the Spark directory in Apache distribution SVN "dev" repo
$ svn co https://dist.apache.org/repos/dist/dev/spark/
  
# Make directory for this RC in the above directory
mkdir spark-1.1.1-rc2
 
# Download the voted binaries and add them to the directory
$ scp andrewor14@people.apache.org:~/public_html/spark-1.1.1-rc2/* spark-1.1.1-rc2
 
# NOTE: Remove any binaries you don’t want to publish
# E.g. never push MapR and *without-hive artifacts to apache
$ rm spark-1.1.1-rc2/*mapr*
$ rm spark-1.1.1-rc2/*without-hive*
$ svn add spark-1.1.1-rc2
$ svn commit -m "Add spark-1.1.1-rc2" --username "andrewor14"
  
# Move the sub-directory in "dev" to the
# corresponding directory in "release"
$ export SVN_EDITOR=vim
$ svn mv https://dist.apache.org/repos/dist/dev/spark/spark-1.1.1-rc2 https://dist.apache.org/repos/dist/release/spark/spark-1.1.1
```

Verify that the resources are present in <a href="https://www.apache.org/dist/spark/">https://www.apache.org/dist/spark/</a>.
It may take a while for them to be visible. This will be mirrored throughout the Apache network. 
There are a few remaining steps.

<h4>Upload to PyPI</h4>

Uploading to PyPI is done after the release has been uploaded to . Go to the <a href="https://pypi.python.org">PyPI website at https://pypi.python.org</a> and log in with the spark-upload account (see the PMC mailing list for account permissions).


Go to the <a href="https://pypi.python.org/pypi?%3Aaction=submit_form">submitting package information</a> page and upload the PKG-INFO file from inside the pyspark packaged file.

Then on the <a href="https://pypi.python.org/pypi?%3Aaction=pkg_edit&name=pyspark"> package edit page</a> click "edit" for the version being uploaded and upload the current Python packaged file and corresponding .asc file. For safety always supply the generated MD5 from the release process in the "MD5 Digest" field.

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
 
# Copy the new documentation to apache
$ git clone https://github.com/apache/spark-website
...
$ cp -R _site spark-website/site/docs/1.1.1

# Update the "latest" link
$ cd spark/site/docs
$ rm latest
$ ln -s 1.1.1 latest
```

Next, update the rest of the Spark website. See how the previous releases are documented. 
In particular, have a look at the changes to the `*.md` files in this commit (all the HTML 
file changes are generated by `jekyll`).

```
$ git add 1.1.1
$ git commit -m "Add docs for Spark 1.1.1" 
```
 
Then, create the release notes. The contributors list can be automatically generated through 
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

Then, update the downloads page, and then the main page with a news item.

<h4>Create an Announcement</h4>

Once everything is working (website docs, website changes) create an announcement on the website 
and then send an e-mail to the mailing list. Enjoy an adult beverage of your choice, and 
congratulations on making a Spark release.
