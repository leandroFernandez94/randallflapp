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
					<h2 style={addBooksStyle.header}>Add a Book</h2>
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
						<div className="form-group">
							<div className="col-md-1 checkbox-inline" style={addBooksStyle.checkbox}>
								<label style={addBooksStyle.checkboxLabel}>
									<input type="checkbox" name="read" value={this.props.read} onChange={this.props.onUpdateNew} required style={addBooksStyle.checkboxHeight}></input> Read it?
								</label>
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
