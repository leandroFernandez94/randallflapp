import React, { Component } from 'react';
import  {AddBookComponent}  from '../components/AddBook/AddBookComponent'

export class BooksListContainerComponent extends Component {
	constructor(props) {
  		super(props);
		this.state = {
			bookName : '',
			bookYear : '',
			bookGenre : ''
		};  
  		this.addBook = this.addBook.bind(this);
 	};

	 addBook(){
		 this.localStorage.set('books')
	 }

	render() {
		return (
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<AddBookComponent name = {this.state.bookName} bookYear={this.state.bookYear} bookGenre={this.state.bookGenre}>

					</AddBookComponent>
				</div>
			</div>
		);
	}
}
