## Generating the website HTML

In this directory you will find text files formatted using Markdown, with an `.md` suffix.

Building the site requires [Jekyll](http://jekyllrb.com/docs)
[Rouge](https://github.com/rouge-ruby/rouge).
The easiest way to install the right version of these tools is using
[Bundler](https://bundler.io/) and running `bundle install` in this directory.

See also https://github.com/apache/spark/blob/master/docs/README.md

A site build will update the directories and files in the `site` directory with the generated files.
Using Jekyll via `bundle exec jekyll` locks it to the right version.
So after this you can generate the html website by running `bundle exec jekyll build` in this
directory. Use the `--watch` flag to have jekyll recompile your files as you save changes.

In addition to generating the site as HTML from the markdown files, jekyll can serve the site via
a web server. To build the site and run a web server use the command `bundle exec jekyll serve` which runs
the web server on port 4000, then visit the site at http://localhost:4000.

Please make sure you always run `bundle exec jekyll build` after testing your changes with
`bundle exec jekyll serve`, otherwise you end up with broken links in a few places.

## Updating Jekyll version

To update `Jekyll` or any other gem please follow these steps:

1. Update the version in the `Gemfile`
1. Run `bundle update` which updates the `Gemfile.lock`
1. Commit both files

## Docs sub-dir

The docs are not generated as part of the website. They are built separately for each release 
of Spark from the Spark source repository and then copied to the website under the docs 
directory. See the instructions for building those in the readme in the Spark 
project's `/docs` directory.

## Rouge and Pygments

We also use [Rouge](https://github.com/rouge-ruby/rouge) for syntax highlighting in documentation markdown pages.
Its HTML output is compatible with CSS files designed for [Pygments](https://pygments.org/).

To mark a block of code in your markdown to be syntax highlighted by `jekyll` during the 
compile phase, use the following syntax:

    {% highlight scala %}
    // Your scala code goes here, you can replace scala with many other
    // supported languages too.
    {% endhighlight %}

You probably don't need to install that unless you want to regenerate the Pygments CSS file.
It requires Python, and can be installed by running `sudo easy_install Pygments`.

## Merge PR

To merge pull request, use the `merge_pr.py` script which also squashes the commits.
