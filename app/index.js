import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var BooksListContainerComponent = require('./containers/BooksListContainerComponent').BooksListContainerComponent;

export class Index extends Component {
	
	render() {
		return (
			<div>
				<BooksListContainerComponent />
			</div>
		);
	}
	
}


ReactDOM.render(
	<Index />,
	document.getElementById('app')
);
