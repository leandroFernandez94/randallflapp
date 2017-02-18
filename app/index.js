import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Index extends Component {
	render() {
		return (
			<div>Hello World!</div>
		);
	}
}


ReactDOM.render(
	<Index />,
	document.getElementById('app')
);
