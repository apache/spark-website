## Generating the website HTML

In this directory you will find text files formatted using Markdown, with an `.md` suffix

Building the site requires [Jekyll](http://jekyllrb.com/docs) 3.3.0 or newer. 
The easiest way to install jekyll is via a Ruby Gem. This will create a directory called `site` 
containing `index.html` as well as the rest of the compiled directories and files.

To install Jekyll and its required dependencies, execute `sudo gem install jekyll pygments.rb` 
and `sudo pip install Pygments`.
See also https://github.com/apache/spark/blob/master/docs/README.md

You can generate the html website by running `jekyll build` in this directory. Use the `--watch` 
flag to have jekyll recompile your files as you save changes.

In addition to generating the site as HTML from the markdown files, jekyll can serve the site via 
a web server. To build the site and run a web server use the command `jekyll serve` which runs 
the web server on port 4000, then visit the site at http://localhost:4000.

Please make sure you always run `jekyll build` after testing your changes with `jekyll server`,
otherwise you end up with broken links in a few places.

## Docs sub-dir

The docs are not generated as part of the website. They are built separately for each release 
of Spark from the Spark source repository and then copied to the website under the docs 
directory. See the instructions for building those in the readme in the Spark 
project's `/docs` directory.

## Pygments

We also use [pygments](http://pygments.org) for syntax highlighting in documentation markdown pages.

To mark a block of code in your markdown to be syntax highlighted by `jekyll` during the 
compile phase, use the following syntax:

    {% highlight scala %}
    // Your scala code goes here, you can replace scala with many other
    // supported languages too.
    {% endhighlight %}

 You probably don't need to install that unless you want to regenerate the pygments CSS file. 
 It requires Python, and can be installed by running `sudo easy_install Pygments`.

## Merge PR

To merge pull request, use the `merge_pr.py` script which also squashes the commits.
