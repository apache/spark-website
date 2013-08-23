Welcome to the Spark website.

## Generating the website HTML

In this directory you will find text files formatted using Markdown, with an ".md" suffix.

You can generate the html version of these files by (installing and) running `jekyll build` (for newer versions of Jekyll) or just `jekyll` (for older versions) in this directory.

The easiest way to install jekyll is via a Ruby Gem. This will create a directory called `site` containing index.html as well as the rest of the compiled directories and files. Read more about Jekyll at http://jekyllrb.com/docs

In addition to generating the site as html from the markdown files, jekyll can serve the site via a webserver. To build and run a webserver use the command `jekyll serve` (or --serve for older ones) which runs the webserver on port 4000, then visit the site at http://localhost:4000.

## Pygments

We also use pygments (http://pygments.org) for syntax highlighting in documentation markdown pages.

To mark a block of code in your markdown to be syntax highlighted by jekyll during the compile phase, use the following syntax:

    {% highlight scala %}
    // Your scala code goes here, you can replace scala with many other
    // supported languages too.
    {% endhighlight %}

 You probably don't need to install that unless you want to regenerate the pygments css file. It requires Python, and can be installed by running `sudo easy_install Pygments`.