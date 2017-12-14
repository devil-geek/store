import React, { Component } from 'react';
import data from './data.json';

export default class Articulos extends Component {
	
	componentDidMount() {
		console.log("data");
		console.log(data);

	}

	render() {
		
		var listItems = data.map(function(item) {
			return (
			  	<div className="column is-one-quarter" key={item.id}>
					<div className="card">
						<div className="card-image is-centered pad">
							<figure className="image is-square">
								<img src={process.env.PUBLIC_URL + '/products/'+ item.img} alt="Producto"/>
							</figure>
						</div>
						<div className="card-content is-centered">
							<div className="content center">
								{item.nombre}
								<br/>
								precio
							</div>
						</div>
						<footer className="card-footer">
							<a className="card-footer-item">
								<span className="icon has-text-danger">
									<i className="fa fa-lg fa-minus-circle"></i>
								</span>
							</a>
							<a className="card-footer-item">1</a>
							<a className="card-footer-item">
								<span className="icon has-text-info">
									<i className="fa fa-lg fa-plus-circle"></i>
								</span>
							</a>
						</footer>
					</div>
				</div>
			);	
		  });

		return (
			<div className="columns is-multiline is-mobile">
				{listItems}
			</div>
		);
	}
}
