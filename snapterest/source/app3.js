var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
	getInitialState: function() {
		console.log('getInitialState called');
		return {
			isHeaderHidden: false
		};
	},

	handleClick: function() {
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},

	render: function() {
		console.log('render called');
		var title = 'Stateful React Component';
		var headerElement = React.createElement('h1', { className: 'header', key: 'header'}, title);
		var buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.handleClick, key: 'button' }, 'Toggle header');
		
		if (this.state.isHeaderHidden) {
			return React.createElement('div', null, [ buttonElement ]);
		}

		return React.createElement('div', null, [ buttonElement, headerElement ]);
	}

});
var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));