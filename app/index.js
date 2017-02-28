import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var MainContainerComponent = require('./containers/MainContainerComponent').MainContainerComponent;

export class Index extends Component {
	
	render() {
		return (
			<div>
				<MainContainerComponent />
			</div>
		);
	}
	
}


ReactDOM.render(
	<Index />,
	document.getElementById('app')
);
