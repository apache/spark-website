# Apache Spark Main Website

This repository captures the main Apache Spark website located at https://spark.apache.org. The programming docs are [in the main Spark repo][1], not here.

[1]: https://github.com/apache/spark/tree/master/docs

To contribute changes, see [CONTRIBUTING](.github/CONTRIBUTING.md).

## Generating the website HTML locally

In this directory you will find text files formatted using Markdown, with an `.md` suffix.

Building the site requires [Ruby 3](https://www.ruby-lang.org), [Jekyll](http://jekyllrb.com/docs), and [Rouge](https://github.com/rouge-ruby/rouge).

```
gem install bundler -v 2.4.22
bundle install
bundle exec jekyll serve
```

### Building the site with Docker

The most reliable way to ensure a compatible environment is to use the official Docker build image from the Apache Spark repository.

If you haven't already, clone the [Apache Spark](https://github.com/apache/spark) repository. Navigate to
the Spark root directory and run the following command to create the builder image:
```
docker build \
  --tag docs-builder:latest \
  --file dev/spark-test-image/docs/Dockerfile \
  dev/spark-test-image-util/docs/
```

Once the image is built, navigate to the `spark-website` root directory, run the script which processes
the Markdown files in the Docker container.
```
.dev/build-docs.sh
```

## Deploying to production

The website is deployed automatically by [ASF Infra][infra]. The deployment configuration is tracked by [.asf.yaml](./.asf.yaml) and is [documented here][asf-docs].

One deployment detail that appears to be critical is the presence of the [`content`](./content/) symlink to `site/`. Even though ASF Infra is [aware of Jekyll][jek], we perhaps do not have the exact setup required for them to automatically use our [Jekyll config](./_config.yml) to understand where the site content lives. With the `content` symlink, the website will just show a plain directory listing of the files in this repo.

[infra]: https://infra.apache.org
[asf-docs]: https://github.com/apache/infrastructure-asfyaml/tree/main?tab=readme-ov-file
[jek]: https://github.com/apache/infrastructure-asfyaml/tree/76d241ccef02e5397e10c173ebf04c07525311ea#jekyll_cms

## Docs sub-dir

The docs are not generated as part of the website. They are built separately for each release 
of Spark from the Spark source repository and then copied to the website under the docs 
directory. See the instructions for building those in the readme in the Spark 
project's `/docs` directory.

## Merge PR

To merge a pull request, use the `merge_pr.py` script. This script also squashes the commits.
