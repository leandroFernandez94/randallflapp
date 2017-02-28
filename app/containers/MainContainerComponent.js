import React, { Component } from 'react';
import  {AddBookComponent}  from '../components/AddBook/AddBookComponent'
import {BookListComponent} from '../components/BookList/BookListComponent'
import testBooks from '../utils/initBooks'
import mainStyle from './mainStyle'


export class MainContainerComponent extends Component {
	constructor(props) {
  		super(props);
		this.state = {
			books : testBooks,
			bookTitle : '',
			bookYear : '',
			bookGenre : '',
			read : false
		};

		this.updateNew = this.updateNew.bind(this);
  		this.addBook = this.addBook.bind(this);
 	}; 

	addBook(e){
		e.preventDefault();
		var newBook = {
			title : this.state.bookTitle,
			year : this.state.bookYear,
			genre : this.state.bookGenre,
			read : this.state.read
		}
		this.state.books.push(newBook);
		console.log(this.state.books);
		this.setState({
			bookTitle : '',
			bookYear : '',
			bookGenre : '',
			read : false
		})
	}

	updateNew(e){
		let name = e.target.name;
		let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		this.setState({
			[name] : value
		}); 
	}

	render() {
		return (
				<div className="row" style={mainStyle.container}>
					<div className="col-md-10 col-md-offset-1">
						<AddBookComponent 
										bookTitle = {this.state.bookTitle} 
										bookYear={this.state.bookYear} 
										bookGenre={this.state.bookGenre} 
										onUpdateNew = {this.updateNew} 
										onAdd={this.addBook}>
						</AddBookComponent>
						<BookListComponent
										list = {this.state.books}>
						</BookListComponent>	
					</div>
				</div>
		);
	}
}
