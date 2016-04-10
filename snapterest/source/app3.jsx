var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
	getDefaultProps: function() {
		console.log('getDefaultProps');
	},

	getInitialState: function() {
		console.log('getInitialState');
		return {
			isHeaderHidden: false
		};
	},

	componentWillMount: function() {
		console.log('componentWillMount');
	},

	componentDidMount: function() {
		console.log('componentDidMount');
	},

	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps - App');
	},

	shouldComponentUpdate: function() {
		console.log('shouldComponentUpdate');
		return true;
	},

	componentWillUpdate: function() {
		console.log('componentWillUpdate');
	},

	componentDidUpdate: function() {
		console.log('componentDidUpdate');
	},

	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},

	_updateHeaderVisibility: function() {
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},

	render: function() {
		console.log('render');
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

	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps - Button');
	},

	_handleClick: function() {
		this.props.buttonClick();
	},

	render: function() {
		return <button className="btn btn-default" onClick={this._handleClick} key="button"> Toggle header </button>;
	}
});

ReactDOM.render(<ReactClass />, document.getElementById('react-application'));