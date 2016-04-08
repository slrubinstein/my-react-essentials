var React = require('react');
var ReactDOM = require('react-dom');

// var createListItemElement = React.createFactory('li');

// var listItemElement1 = createListItemElement({className: 'item-1', key: 'item-1'}, 'Item 1');
// var listItemElement2 = createListItemElement({className: 'item-2', key: 'item-2'}, 'Item 2');
// var listItemElement3 = createListItemElement({className: 'item-3', key: 'item-3'}, 'Item 3');

// var reactFragment2 = [ listItemElement1, listItemElement2, listItemElement3];
// var listOfItems = React.createElement('ul', { className: 'list-of-items'}, reactFragment2);

// ReactDOM.render(listOfItems, document.getElementById('react-application'));

var listOfItems = <ul className="list-of-items">
										<li className="item-1">Item 1</li>
										<li className="item-2">Item 2</li>
										<li className="item-3">Item 3</li>
									</ul>;

ReactDOM.render(listOfItems, document.getElementById('react-application'));