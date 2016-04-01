#!/bin/bash 
git clone https://github.com/Snapkite/snapkite-filter-is-possibly-sensitive.git snapkite-engine/filters/snapkite-filter-is-possibly-sensitive/
git clone https://github.com/Snapkite/snapkite-filter-has-mobile-photo snapkite-engine/filters/snapkite-filter-has-mobile-photo/
git clone https://github.com/Snapkite/snapkite-filter-has-text snapkite-engine/filters/snapkite-filter-has-text/
git clone https://github.com/Snapkite/snapkite-filter-is-retweet snapkite-engine/filters/snapkite-filter-is-retweet/

cp snapkite-engine/filters/snapkite-filter-has-mobile-photo/example.config.json snapkite-engine/filters/snapkite-filter-has-mobile-photo/config.json
cp snapkite-engine/filters/snapkite-filter-has-text/example.config.json snapkite-engine/filters/snapkite-filter-has-text/config.json
cp snapkite-engine/filters/snapkite-filter-is-possibly-sensitive/example.config.json snapkite-engine/filters/snapkite-filter-is-possibly-sensitive/config.json
cp snapkite-engine/filters/snapkite-filter-is-retweet/example.config.json snapkite-engine/filters/snapkite-filter-is-retweet/config.json