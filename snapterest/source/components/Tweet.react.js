var React = require('react');

var Tweet = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.tweet.text}
			</div>
		);
	}
});

module.exports = Tweet;
