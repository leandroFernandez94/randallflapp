import React, { Component } from 'react';
var BookListStyle = require('./style')

export class BookListComponent extends Component {
	constructor(props) {
		super(props);
	}

    TableData() {
        return (
            this.props.list.map(item => 
                <tr key={item.title}>
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                    <td>{item.genre}</td>
                </tr>
            )  
        )
    }


    render(){
        return(
            <div style={BookListStyle.container}>
                <div className="row" style={BookListStyle.row}>    
                    <table className="table table-hover" style={BookListStyle.table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Year Published</th>
                                <th>Genres</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.TableData()}
                        </tbody>
                    </table>
                </div>
            </div>    
        )
    }
}
