#!/bin/bash 
echo ">>> Creating resources directory"
mkdir ../resources
echo ">>> Cloning Snapkite Engine"
git clone https://github.com/Snapkite/snapkite-engine.git ../resources/snapkite-engine
echo ">>> Moving config.json to Snapkite Engine"
mv config.json ../resources/snapkite-engine
echo ">>> Cloning Snapkite filter repos"
git clone https://github.com/Snapkite/snapkite-filter-is-possibly-sensitive.git ../resources/snapkite-engine/filters/snapkite-filter-is-possibly-sensitive/
git clone https://github.com/Snapkite/snapkite-filter-has-mobile-photo ../resources/snapkite-engine/filters/snapkite-filter-has-mobile-photo/
git clone https://github.com/Snapkite/snapkite-filter-has-text ../resources/snapkite-engine/filters/snapkite-filter-has-text/
git clone https://github.com/Snapkite/snapkite-filter-is-retweet ../resources/snapkite-engine/filters/snapkite-filter-is-retweet/
echo ">>> Copying Snapkite filter config files"
cp ../resources/snapkite-engine/example.config.json ../resources/snapkite-engine/config.json
cp ../resources/snapkite-engine/filters/snapkite-filter-has-mobile-photo/example.config.json ../resources/snapkite-engine/filters/snapkite-filter-has-mobile-photo/config.json
cp ../resources/snapkite-engine/filters/snapkite-filter-has-text/example.config.json ../resources/snapkite-engine/filters/snapkite-filter-has-text/config.json
cp ../resources/snapkite-engine/filters/snapkite-filter-is-possibly-sensitive/example.config.json ../resources/snapkite-engine/filters/snapkite-filter-is-possibly-sensitive/config.json
cp ../resources/snapkite-engine/filters/snapkite-filter-is-retweet/example.config.json ../resources/snapkite-engine/filters/snapkite-filter-is-retweet/config.json