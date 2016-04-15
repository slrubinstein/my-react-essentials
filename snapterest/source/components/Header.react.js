var React = require('react');

var Header = React.createClass({

	style: {
	  color: "blue",
    fontSize: "24px",
    borderBottom: "3px dotted blue",
    marginBottom: "20px",
    paddingBottom: "20px"
	},

	render: function() {
		return (
			<div style={this.style}>
				Header
			</div>
		);
	}
});

module.exports = Header;
