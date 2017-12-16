import React, { Component } from 'react';
import data from './data.json';
import Item from '../Item/Item';

export default class Articulos extends Component {

	componentDidMount() {
		console.log("data");
		console.log(data);
	}
	
	render() {
		
		var listItems = data.map(function(item) {
			return (
				<Item 
					key={item.id} 
					data={item}
					handleItemClick={this.props.handleItemClick}
				/>
			);	
		  }, this);

		return (
			<div className="columns is-multiline is-mobile">
				{ listItems } 
				
			</div>
		);
	}
}
