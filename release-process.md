---
layout: global
title: Release Process
type: "page singular"
navigation:
  weight: 5
  show: true
---

<h1>Preparing Spark releases</h1>

The release manager role in Spark means you are responsible for a few different things:

- [Preparing your setup](#preparing-your-setup)
  - [Preparing gpg key](#preparing-gpg-key)
    - [Generate key](#generate-key)
    - [Upload key](#upload-key)
    - [Update KEYS file with your code signing key](#update-keys-file-with-your-code-signing-key)
  - [Installing Docker](#installing-docker)
- [Preparing for release candidates](#preparing-for-release-candidates)
  - [Cutting a release candidate](#cutting-a-release-candidate)
  - Informing the community of timing
  - Working with component leads to clean up JIRA
  - Making code changes in that branch with necessary version updates
- Running the voting process for a release:
  - [Creating release candidates using automated tooling](#creating-release-candidates-using-automated-tooling)
  - [Triaging issues](https://s.apache.org/spark-jira-versions)
  - [Call a vote on the release candidate](#call-a-vote-on-the-release-candidate)
- [Finalizing and posting a release](#finalize-the-release)
  - [Upload to Apache release directory](#upload-to-apache-release-directory)
  - [Upload to PyPI](#upload-to-pypi)
  - [Remove RC artifacts from repositories](#remove-rc-artifacts-from-repositories)
  - [Remove old releases from Mirror Network](#remove-old-releases-from-mirror-network)
  - [Update the Apache Spark repository](#update-the-apache-spark-repository)
  - [Update the configuration of Algolia Crawler](#update-the-configuration-of-algolia-crawler)
  - [Update the Spark website](#update-the-spark-website)
    - [Upload generated docs](#upload-generated-docs)
    - [Update the rest of the Spark website](#update-the-rest-of-the-spark-website)
  - [Create and upload Spark Docker Images](#create-and-upload-spark-docker-images)
  - [Create an announcement](#create-an-announcement)
- [Preparing Spark Releases with GitHub Actions](#preparing-spark-releases-with-github-actions)
  - [Preparing your GitHub Actions setup](#preparing-your-github-actions-setup)
  - [Creating release candidates](#create-release-candidates)
    - [If the workflow fails ...](#if-workflow-fails)
  - [Publishing the release](#publishing-release)
    - [If the workflow fails ...](#if-publishing-workflow-fails)

<h2 id="preparing-your-setup">Preparing your setup</h2>


If you are a new Release Manager, you can read up on the process from the followings:

- release signing [https://www.apache.org/dev/release-signing.html](https://www.apache.org/dev/release-signing.html)
- gpg for signing [https://www.apache.org/dev/openpgp.html](https://www.apache.org/dev/openpgp.html)
- svn [https://infra.apache.org/version-control.html#svn](https://infra.apache.org/version-control.html#svn)

<h3 id="preparing-gpg-key">Preparing gpg key</h3>

You can skip this section if you have already uploaded your key.

<h4 id="generate-key">Generate key</h4>

Here's an example of gpg 2.4.8. If you use gpg version 1 series, please refer to <a href="https://www.apache.org/dev/openpgp.html#generate-key">generate-key</a> for details.
Note that you need an `@apache.org` email address to prepare a Spark release with the `Release Apache Spark` GitHub action.

```
$ gpg --full-gen-key
gpg (GnuPG) 2.4.8; Copyright (C) 2025 g10 Code GmbH
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection? 9
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
   (4) NIST P-384
   (6) Brainpool P-256
Your selection? 1
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 0
Key does not expire at all
Is this correct? (y/N) y

GnuPG needs to construct a user ID to identify your key.

Real name: Peter Test
Email address: ptest@apache.org
Comment: CODE SIGNING KEY
You selected this USER-ID:
    "Peter Test (CODE SIGNING KEY) <ptest@apache.org>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: revocation certificate stored as '/Users/ptest/.gnupg/openpgp-revocs.d/69DD5A189B3C274353A677214926E0E83FF6D044.rev'
public and secret key created and signed.

pub   ed25519 2025-09-18 [SC]
      69DD5A189B3C274353A677214926E0E83FF6D044
uid                      Peter Test (CODE SIGNING KEY) <ptest@apache.org>
sub   cv25519 2025-09-18 [E]
```

Note that the last 8 digits (3FF6D044) of the public key is the <a href="https://infra.apache.org/release-signing.html#key-id">key ID</a>.

<h4 id="upload-key">Upload key</h4>

After generating the public key, we should upload it to <a href="https://infra.apache.org/release-signing.html#keyserver">public key server</a>:

```
$ gpg --keyserver hkps://keys.openpgp.org --send-key 3FF6D044
```

Please refer to <a href="https://infra.apache.org/release-signing.html#keyserver-upload">keyserver-upload</a> for details.

<h4 id="update-keys-file-with-your-code-signing-key">Update KEYS file with your code signing key</h4>

To get the code signing key (a.k.a ASCII-armored public key), run the command:

```
$ gpg --export --armor 3FF6D044
```

And then append the generated key to the KEYS file by:

```
# Move dev/ to release/ when the voting is completed. See Finalize the Release below
svn co --depth=files "https://dist.apache.org/repos/dist/dev/spark" svn-spark
# edit svn-spark/KEYS file
svn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m"Update KEYS"
```

If you want to do the release on another machine, you can transfer your secret key to that machine
via the `gpg --export-secret-keys` and `gpg --import` commands.

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="installing-docker">Installing Docker</h3>

The scripts to create release candidates are run through docker. You need to install docker before running
these scripts. Please make sure that you can run docker as non-root users. See
<a href="https://docs.docker.com/install/linux/linux-postinstall/">https://docs.docker.com/install/linux/linux-postinstall</a>
for more details.

<h2 id="preparing-for-release-candidates">Preparing for release candidates</h2>


The main step towards preparing a release is to create a release branch. This is done via
standard Git branching mechanism and should be announced to the community once the branch is
created.


<p align="right"><a href="#top">Return to top</a></p>
<h3 id="cutting-a-release-candidate">Cutting a release candidate</h3>

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

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="creating-release-candidates-using-automated-tooling">Creating release candidates using automated tooling</h3>

To cut a release candidate, there are 4 steps:
1. Create a git tag for the release candidate.
1. Package the release binaries & sources, and upload them to the Apache staging SVN repo.
1. Create the release docs, and upload them to the Apache staging SVN repo.
1. Publish a snapshot to the Apache staging Maven repo.

The process of cutting a release candidate has been automated via the `dev/create-release/do-release-docker.sh` script.
Run this script, type information it requires, and wait until it finishes. You can also do a single step via the `-s` option.
Please run `do-release-docker.sh -h` and see more details.

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="call-a-vote-on-the-release-candidate">Call a vote on the release candidate</h3>

The release voting takes place on the Apache Spark developers list (the PMC is voting).
Look at past voting threads to see how this proceeds. The email should follow
<a href="https://mail-archives.apache.org/mod_mbox/spark-dev/201407.mbox/%3cCABPQxss7Cf+YaUuxCk0jnusH4207hCP4dkWn3BWFSvdnD86HHQ@mail.gmail.com%3e">this format</a>.

- Make a shortened link to the full list of JIRAs using <a href="https://s.apache.org/">https://s.apache.org/</a>
- If possible, attach a draft of the release notes with the email
- Make sure the voting closing time is in UTC format. Use this script to generate it
- Make sure the email is in text format and the links are correct

Once the vote is done, you should also send out a summary email with the totals, with a subject
that looks something like `[VOTE][RESULT] ...`.

<h2 id="finalize-the-release">Finalize the release</h2>

Note that `dev/create-release/do-release-docker.sh` script (`finalize` step ) automates most of the following steps **except** for:
- [Update the configuration of Algolia Crawler](#update-the-configuration-of-algolia-crawler)
- [Remove old releases from Mirror Network](#remove-old-releases-from-mirror-network)
- [Update the rest of the Spark website](#update-the-rest-of-the-spark-website)
- [Create and upload Spark Docker Images](#create-and-upload-spark-docker-images)
- [Create an announcement](#create-an-announcement) 

Please manually verify the result after each step.

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="upload-to-apache-release-directory">Upload to Apache release directory</h3>

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


For Maven Central Repository, you can Release from the <a href="https://repository.apache.org/">Apache Nexus Repository Manager</a>. This is already populated by the `release-build.sh publish-release` step. Log in,
open Staging Repositories, find the one voted on (eg. orgapachespark-1257 for [https://repository.apache.org/content/repositories/orgapachespark-1257/](https://repository.apache.org/content/repositories/orgapachespark-1257/)),
select and click Release and confirm. If successful, it should show up under [https://repository.apache.org/content/repositories/releases/org/apache/spark/spark-core_2.11/2.2.1/](https://repository.apache.org/content/repositories/releases/org/apache/spark/spark-core_2.11/2.2.1/)
and the same under [https://repository.apache.org/content/groups/maven-staging-group/org/apache/spark/spark-core_2.11/2.2.1/](https://repository.apache.org/content/groups/maven-staging-group/org/apache/spark/spark-core_2.11/2.2.1/)
(look for the correct release version). After some time this will be sync'd to <a href="https://search.maven.org/">Maven Central</a> automatically.


<p align="right"><a href="#top">Return to top</a></p>
<h3 id="upload-to-pypi">Upload to PyPI</h3>

You'll need your own PyPI account. If you do not have a PyPI account that has access to the `pyspark` and `pyspark-connect` projects on PyPI, please ask the <a href="mailto:private@spark.apache.org">PMC</a> to grant permission for both.

The artifacts can be uploaded using <a href="https://pypi.org/project/twine/">twine</a>. Just run:

```
twine upload -u __token__  -p $PYPI_API_TOKEN \
    --repository-url https://upload.pypi.org/legacy/ \
    "pyspark-$PYSPARK_VERSION.tar.gz" \
    "pyspark-$PYSPARK_VERSION.tar.gz.asc"
```

Adjusting the command for the files that match the new release. If for some reason the twine upload
is incorrect (e.g. http failure or other issue), you can rename the artifact to
`pyspark-version.post0.tar.gz`, delete the old artifact from PyPI and re-upload.

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="remove-rc-artifacts-from-repositories">Remove RC artifacts from repositories</h3>

**NOTE! If you did not make a backup of docs for approved RC, this is the last time you can make a backup. This will be used to upload the docs to the website in next few step. Check out docs from svn before removing the directory.**

After the vote passes and you moved the approved RC to the release repository, you should delete
the RC directories from the staging repository. For example:

```
RC=v3.5.2-rc3 && \
  svn rm https://dist.apache.org/repos/dist/dev/spark/"${RC}"-bin/ \
  https://dist.apache.org/repos/dist/dev/spark/"${RC}"-docs/ \
  -m"Removing RC artifacts."
```

Make sure to also remove the unpublished staging repositories from the
<a href="https://repository.apache.org/">Apache Nexus Repository Manager</a>.


<p align="right"><a href="#top">Return to top</a></p>
<h3 id="remove-old-releases-from-mirror-network">Remove old releases from Mirror Network</h3>

Spark always keeps the latest maintenance released of each branch in the mirror network.
To delete older versions simply use svn rm:

```
$ svn rm https://dist.apache.org/repos/dist/release/spark/spark-1.1.0
```

You will also need to update `js/download.js` to indicate the release is not mirrored
anymore, so that the correct links are generated on the site.


<p align="right"><a href="#top">Return to top</a></p>
<h3 id="update-the-apache-spark-repository">Update the Spark Apache<span class="tm">&trade;</span> repository</h3>

Check out the tagged commit for the release candidate that passed and apply the correct version tag.

```
$ git tag v1.1.1 v1.1.1-rc2 # the RC that passed
$ git push apache v1.1.1
```

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="update-the-configuration-of-algolia-crawler">Update the configuration of Algolia Crawler</h3>

The search box on the <a href="https://spark.apache.org/docs/latest/">Spark documentation website</a> leverages the <a href="https://www.algolia.com/products/search-and-discovery/crawler/">Algolia Crawler</a>. Before a release, please update the crawler configuration for Apache Spark with the new version on the <a href="https://crawler.algolia.com/">Algolia Crawler Admin Console</a>. If you don't have access to the configuration, contact <a href="mailto:gengliang@apache.org">Gengliang Wang</a> or <a href="mailto:lixiao@apache.org">Xiao Li</a> for help.

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="update-the-spark-website">Update the Spark website</h3>

<h4 id="upload-generated-docs">Upload generated docs</h4>

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
$ cd spark-website/site/docs
$ rm latest
$ ln -s 1.1.1 latest
```

<h4 id="update-the-rest-of-the-spark-website">Update the rest of the Spark website</h4>

Next, update the rest of the Spark website. See how the previous releases are documented
(all the HTML file changes are generated by `jekyll`). In particular:

* update `documentation.md` to add link to the docs for the new release
* add the new release to `js/downloads.js` (attention to the order of releases)
* update `downloads.md` to use the latest release in the linking example
* add the new release to `site/static/versions.json` (attention to the order of releases) [for `spark version drop down` of the `PySpark` docs]
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

Considering the Pull Request will be large, please separate the commits of code changes and generated `site` directory for an easier review.

After merging the change into the `asf-site` branch, you may need to create a follow-up empty
commit to force synchronization between ASF's git and the web site, and also the GitHub mirror.
For some reason synchronization seems to not be reliable for this repository.

On a related note, make sure the version is marked as released on JIRA. Go find the release page as above, eg.,
[`https://issues.apache.org/jira/projects/SPARK/versions/12340295`](https://issues.apache.org/jira/projects/SPARK/versions/12340295),
and click the "Release" button on the right and enter the release date.

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
$ cd dev/create-release
# Set RELEASE_TAG and PREVIOUS_RELEASE_TAG
$ export RELEASE_TAG=v1.1.1
$ export PREVIOUS_RELEASE_TAG=v1.1.0
# Generate initial contributors list, likely with warnings
$ ./generate-contributors.py
# Set GITHUB_OAUTH_KEY.
$ export GITHUB_OAUTH_KEY=blabla
# Set either JIRA_ACCESS_TOKEN (for 4.0.0 and later) or JIRA_USERNAME / JIRA_PASSWORD.
$ export JIRA_ACCESS_TOKEN=blabla
$ export JIRA_USERNAME=blabla
$ export JIRA_PASSWORD=blabla
# Translate names generated in the previous step, reading from known_translations if necessary
$ ./translate-contributors.py
```

Additionally, if you wish to give more specific credit for developers of larger patches, you may
use the following commands to identify large patches. Extra care must be taken to make sure
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

<p align="right"><a href="#top">Return to top</a></p>
<h3 id="create-and-upload-spark-docker-images">Create and upload Spark Docker Images</h3>

The apache/spark-docker provides Dockerfiles and GitHub Action for Spark Docker images published, please follow the [instructions](https://github.com/apache/spark-docker?tab=readme-ov-file#create-a-new-version) to create and upload the docker images.


<p align="right"><a href="#top">Return to top</a></p>
<h3 id="create-an-announcement">Create an announcement</h3>

Once everything is working (website docs, website changes) create an announcement on the website
and then send an e-mail to the mailing list with a subject that looks something like `[ANNOUNCE] ...`. To create an announcement, create a post under
`news/_posts` and then run `bundle exec jekyll build`.

Enjoy an adult beverage of your choice, and congratulations on making a Spark release.

<p align="right"><a href="#top">Return to top</a></p>


<h1 id="preparing-spark-releases-with-github-actions">Preparing Spark Releases with GitHub Actions</h1>

Apache Spark provides a [GitHub Actions workflow](https://github.com/apache/spark/blob/master/.github/workflows/release.yml) for creating official Spark releases. Only Apache Spark PMC members can run this workflow in **their forked repositories**.

- [Preparing Your GitHub Actions Setup](#preparing-your-github-actions-setup)
  - [Creating release candidates](#preparing-gpg-key)
  - [Publishing the release](#publishing-release)

<h2 id="preparing-your-github-actions-setup">Preparing your GitHub Actions setup</h2>

To create an official release, PMC members must configure GitHub Actions Secrets in their forked repository:

- `ASF_USERNAME`: Your Apache Software Foundation (ASF) account ID.
- `ASF_PASSWORD`: The password for your ASF account.
- `ASF_NEXUS_TOKEN`: ASF Nexus API token associated with your ASF account.
  Can be found in https://repository.apache.org/#profile;User%20Token
- `GPG_PRIVATE_KEY`: Your GPG private key, exported with:
  `gpg --armor --export-secret-keys ABCD1234 > private.key`.
  Make sure this key is registered with a public key server. See also [Preparing your setup](#preparing-your-setup).
- `GPG_PASSPHRASE`: The passphrase for your GPG private key.
- `PYPI_API_TOKEN`: Required when finalizing the release. If you do not already have the permission, request it via private@spark.apache.org. Once granted, you can create a token at https://pypi.org/manage/account/ with access to the following projects:
  - https://pypi.org/project/pyspark/
  - https://pypi.org/project/pyspark-connect/
  - https://pypi.org/project/pyspark-client/

After setting up the secrets, make sure your release branch is up-to-date and synced with the corresponding branch in the Apache Spark repository.

Finally, double-check the JIRA versions. See [Cutting a release candidate](#cutting-a-release-candidate).

<h2 id="create-release-candidates">Creating release candidates</h2>

- Go to the GitHub Actions page in your forked repository, e.g., `https://github.com/$USER/spark/actions/workflows/release.yml`.
- Click `Run workflow` and provide the required inputs. Leave **Whether to convert RC to the official release (IRREVERSIBLE)** set to **`false`**.
  - Once the workflow completes successfully, it will automatically create a release candidate (RC) and send an email to the dev mailing list to start the voting process.
- After the vote is complete, you must also send a summary email with the results. Use a subject line similar to: `[VOTE][RESULT] ...`.

<h3 id="if-workflow-fails">If the workflow fails ...</h3>

If something goes wrong during the process and a release candidate (RC) needs to be
cleaned up, follow these steps:

- Revert the RC-related commits, such as:
  - "Preparing development version 3.5.7-SNAPSHOT"
  - "Preparing Spark release v3.5.6-rc1"
- Delete the RC tag from the remote repository, for example:
  - `git push --delete apache v3.5.6-rc1`
- Remove the RC artifacts from SVN:
  - `RC=v3.5.6-rc1 && svn rm https://dist.apache.org/repos/dist/dev/spark/"${RC}"-bin/ -m "Removing RC artifacts"`
  - `RC=v3.5.6-rc1 && svn rm https://dist.apache.org/repos/dist/dev/spark/"${RC}"-docs/ -m "Removing RC artifacts"`
- Drop the staging repository (if it exists) at:
  https://repository.apache.org/#stagingRepositories

<h2 id="publishing-release">Publishing the release</h2>

**Be Careful!**

**THIS STEP IS IRREVERSIBLE. Once the artifacts are moved into the release folder, they cannot be removed.**

- Go to the GitHub Actions page in your forked repository, e.g., `https://github.com/$USER/spark/actions/workflows/release.yml`.
- Click `Run workflow` and provide the required inputs. Set **Whether to convert RC to the official release (IRREVERSIBLE)** to **`true`**.
  This includes [Finalizing the release](#finalize-the-release) with additional automation.
- After it completes successfully, you should:
  - [Update the configuration of the Algolia Crawler](#update-the-configuration-of-algolia-crawler)
  - [Create and upload Spark Docker images](#create-and-upload-spark-docker-images)
  - [Create an announcement](#create-an-announcement)


<h3 id="if-publishing-workflow-fails">If the workflow fails ...</h3>

If the workflow fails here, you will need to manually debug the release script, [`dev/create-release/release-build.sh`](https://github.com/apache/spark/blob/master/dev/create-release/release-build.sh) and then run the remaining commands yourself after the failure.
