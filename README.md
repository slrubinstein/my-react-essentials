# my-react-essentials

This repo is a starter project for a [React](https://facebook.github.io/react/) study group. It uses [React Essentials](https://github.com/fedosejev/react-essentials) as a guide.

## Instructions for setting up github:
- fork this git repo: https://github.com/slrubinstein/my-react-essentials
- cd my-react-essentials
- run "sh startup.sh" to install other github dependencies for snapkite-engine, which will appear in ../resources
- cd ../resources/snapkite-engine
- enter your twitter API credentials into config.json
- add the following filters to the filters array in config.json
	"snapkite-filter-is-possibly-sensitive",
	"snapkite-filter-has-mobile-photo",
	"snapkite-filter-is-retweet",
	"spankite-filter-has-text"
- npm install
- npm start
- You should see "[Snapkite][Socket] Listening on port 3000"
