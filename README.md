Welcome to the Spark website.

## Generating the website HTML

In this directory you will find text files formatted using Markdown, with an ".md" suffix.

Building the site requires Jekyll 1.0.0 or newer (because we use the keep_files config option. The easiest way to install jekyll is via a Ruby Gem. This will create a directory called `site` containing index.html as well as the rest of the compiled directories and files. Read more about Jekyll at http://jekyllrb.com/docs

You can generate the html website by running `jekyll build` in this directory. Use the --watch flag to have jekyll recompile your files as you save changes.

In addition to generating the site as html from the markdown files, jekyll can serve the site via a web server. To build the site and run a web server use the command `jekyll serve` which runs the web server on port 4000, then visit the site at http://localhost:4000.

## Docs sub-dir

The docs are not generated as part of the website. They are built separately for each release of Spark from the Spark source repository and then copied to the website under the docs directory. See the instructions for building those in the readme in the SPARK_SOURCE/docs directory.

## Pygments

We also use pygments (http://pygments.org) for syntax highlighting in documentation markdown pages.

To mark a block of code in your markdown to be syntax highlighted by jekyll during the compile phase, use the following syntax:

    {% highlight scala %}
    // Your scala code goes here, you can replace scala with many other
    // supported languages too.
    {% endhighlight %}

 You probably don't need to install that unless you want to regenerate the pygments css file. It requires Python, and can be installed by running `sudo easy_install Pygments`.