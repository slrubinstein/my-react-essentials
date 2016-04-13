var React = require('react');

var Collection = React.createClass({

	style: {
		border: "1px solid red",
    color: "blue",
    fontSize: "18px",
    background: "yellow",
    padding: "18px",
    fontWeight: "bold"
	},

	render: function() {
		return (
			<div style={this.style}>
				Collection
			</div>
		);
	}
});

module.exports = Collection;
