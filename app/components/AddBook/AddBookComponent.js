import React, { Component } from 'react';


var addBooksStyle = require('./style')

export class AddBookComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={addBooksStyle.container}>
				<div className="row" style={addBooksStyle.row}>
					<h1 style={addBooksStyle.header}>Add a Book</h1>
				</div>
				<div className="row" style={addBooksStyle.row}>
					<form onSubmit={this.props.onAdd}>
						<div className="form-group">
							<div className="col-md-2">
								<input type="text" name="bookTitle" value={this.props.bookTitle} onChange={this.props.onUpdateNew} className="form-control" placeholder="add title..." required></input>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-2">
								<input type="text" name="bookYear" value={this.props.bookYear} onChange={this.props.onUpdateNew} className="form-control" placeholder="add year..." required></input>
							</div>
						</div>
						<div className="form-group">
							<div className="col-md-2">
								<input type="text" name="bookGenre" value={this.props.bookGenre} onChange={this.props.onUpdateNew} className="form-control" placeholder="add genre..." required></input>
							</div>
						</div>
						<div className="form-group col-md-2">
							<button type="submit" className="btn btn-success" >add</button>
						</div>
					</form>	
				</div>
			</div>
		);
	}
}
