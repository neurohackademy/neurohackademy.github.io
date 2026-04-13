
FROM bretfisher/jekyll-serve:latest

COPY Gemfile /site/Gemfile
RUN cd /site && bundle install && bundle update

