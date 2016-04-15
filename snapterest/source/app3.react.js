var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
	getDefaultProps: function() {
		console.log('APP - getDefaultProps');
	},

	getInitialState: function() {
		console.log('APP - getInitialState');
		return {
			isHeaderHidden: false
		};
	},

	componentWillMount: function() {
		console.log('APP - componentWillMount');
	},

	componentDidMount: function() {
		console.log('APP - componentDidMount');
	},

	componentWillReceiveProps: function() {
		console.log('APP - componentWillReceiveProps');
	},

	shouldComponentUpdate: function() {
		console.log('APP - shouldComponentUpdate');
		return true;
	},

	componentWillUpdate: function() {
		console.log('APP - componentWillUpdate');
	},

	componentDidUpdate: function() {
		console.log('APP - componentDidUpdate');
	},

	componentWillUnmount: function() {
		console.log('APP - componentWillUnmount');
	},

	_updateHeaderVisibility: function() {
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},

	render: function() {
		console.log('APP - render');
		var title = 'Stateful React Component';

		headerElement = <h1 className="header" key="header"> {title} </h1>;
		
		if (this.state.isHeaderHidden) {
			return (
				<div>
					<ReactButton buttonClick={this._updateHeaderVisibility}/>
				</div>
			);
		}

		return (
			<div>
				<ReactButton buttonClick={this._updateHeaderVisibility} />
				{headerElement}
			</div>
		);
	}

});

var ReactButton = React.createClass({
	getDefaultProps: function() {
		console.log('BUTTON - getDefaultProps');
	},

	getInitialState: function() {
		console.log('BUTTON - getInitialState');
		return {
			isHeaderHidden: false
		};
	},


	componentWillMount: function() {
		console.log('BUTTON - componentWillMount');
	},

	componentDidMount: function() {
		console.log('BUTTON - componentDidMount');
	},

	componentWillReceiveProps: function() {
		console.log('BUTTON - componentWillReceiveProps');
	},

	shouldComponentUpdate: function() {
		console.log('BUTTON - shouldComponentUpdate');
		return true;
	},

	componentWillUpdate: function() {
		console.log('BUTTON - componentWillUpdate');
	},

	componentDidUpdate: function() {
		console.log('BUTTON - componentDidUpdate');
	},

	componentWillUnmount: function() {
		console.log('BUTTON - componentWillUnmount');
	},

	_handleClick: function() {
		this.props.buttonClick();
	},

	render: function() {
		console.log('BUTTON - render');
		return <button className="btn btn-default" onClick={this._handleClick} key="button"> Toggle header </button>;
	}
});

ReactDOM.render(<ReactClass />, document.getElementById('react-application'));