# alex-cannon.github.io
Welcome to my Blog and Portfolio! This site is built with Jekyll and hosted by github pages.

Want to create your own blog hosted by github pages?
[Get started](https://jekyllrb.com/) with the Jekyll docs.

# Get Started
Follow these steps to get started:

1) Fork this repo
2) Run Jekyll in Docker:

```
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll \
  jekyll serve
```

**OR...**

1) Follow the [Jekyll Installation](https://jekyllrb.com/docs/installation/) Guide.
2) Install dependencies
    * You may have to remove "#" comments in the Gemfile. This is required to bundle the site for deployment.
    * $ gem install
3) Start the server.
    * $ jekyll serve
Now, the development server should be running on localhost:4000.

# Contributions
This is our workflow:
1) Fork
2) Make changes to the *jekyll* branch
3) Make your first PR!
