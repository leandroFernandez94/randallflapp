import React, { Component } from 'react';


var addBooksStyle = require('./style')

export class AddBookComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container" style={addBooksStyle.container}>
				<div className="row" style={addBooksStyle.row}>
					<h1>Add a Book</h1>
				</div>
				<div className="row" style={addBooksStyle.row}>
					<div className="col-md-2">
						<input type="text" name="book title" className="form-control" placeholder="add title..."></input>
					</div>
					<div className="col-md-2">
						<input type="text" name="book year" className="form-control" placeholder="add release year..."></input>
					</div>	
					<div className="col-md-2">
						<input type="text" name="book genre" className="form-control" placeholder="add book genre..."></input>
					</div>
					<div className="col-md-2">
						<button type="submit" className="btn btn-success">add</button>
					</div>
				</div>
			</div>
		);
	}
}
