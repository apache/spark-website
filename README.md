## Generating the website HTML

In this directory you will find text files formatted using Markdown, with an `.md` suffix.

Building the site requires [Ruby 3](https://www.ruby-lang.org), [Jekyll](http://jekyllrb.com/docs), and
[Rouge](https://github.com/rouge-ruby/rouge). The most reliable way to ensure a compatible environment
is to use the official Docker build image from the Apache Spark repository.

If you haven't already, clone the [Apache Spark](https://github.com/apache/spark) repository. Navigate to
the Spark root directory and run the following command to create the builder image:
```
docker build \
  --tag docs-builder:latest \
  --file dev/spark-test-image/docs/Dockerfile \
  dev/spark-test-image-util/docs/
```

Once the image is built, run the container to process the Markdown files. Note: Replace `/path/to/spark-website`
in the command below with the *absolute path* to your local website directory.
```
docker run \
  -e HOST_UID=$(id -u) \
  -e HOST_GID=$(id -g) \
  --mount type=bind,source="/path/to/spark-website",target="/spark-website" \
  -w /spark-website \
  docs-builder:latest \
  /bin/bash -c "sh .dev/run-in-container.sh"
```

## Docs sub-dir

The docs are not generated as part of the website. They are built separately for each release 
of Spark from the Spark source repository and then copied to the website under the docs 
directory. See the instructions for building those in the readme in the Spark 
project's `/docs` directory.

## Rouge and Pygments

We also use [Rouge](https://github.com/rouge-ruby/rouge) for syntax highlighting in documentation Markdown pages.
Its HTML output is compatible with CSS files designed for [Pygments](https://pygments.org/).

To mark a block of code in your Markdown to be syntax highlighted by `jekyll` during the 
compile phase, use the following syntax:

    {% highlight scala %}
    // Your Scala code goes here, you can replace Scala with many other
    // supported languages too.
    {% endhighlight %}

You probably don't need to install that unless you want to regenerate the Pygments CSS file.
It requires Python, and can be installed by running `sudo easy_install Pygments`.

## Merge PR

To merge pull request, use the `merge_pr.py` script which also squashes the commits.
