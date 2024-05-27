FROM ruby:3.3.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs npm vim
RUN mkdir /portfolio
WORKDIR /portfolio
COPY Gemfile /portfolio/Gemfile
COPY Gemfile.lock /portfolio/Gemfile.lock
COPY package.json /portfolio/package.json
COPY package-lock.json /portfolio/package-lock.json
RUN bundle install
COPY . /portfolio
