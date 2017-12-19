import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cantidad: 1
        }
      }
    Add = () => {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
    Sub = () => {
        if(this.state.cantidad > 0){  
            this.setState({
                cantidad: this.state.cantidad - 1
            }) 
        }  
	} 
	Reset = () => {
		this.props.handleItemClick(this.props.data, this.state.cantidad);
        this.setState({
            cantidad: 1
        })
    } 
    render() {
        return (
			  	<div className="column is-5-mobile is-5-tablet is-3-desktop is-2-widescreen is-2-fullhd" key={this.props.data.id}>
					<div className="card">
						<div className="card-image is-centered pad" onClick={ this.Reset }>
							<figure className="image is-square">
								<img src={process.env.PUBLIC_URL + '/products/'+ this.props.data.img} alt="Producto"/>
							</figure>
						</div>
						<div className="card-content is-centered">
							<div className="content center">
								{/* {this.props.data.nombre}  */}
								${this.props.data.precio.toFixed(2)}
							</div>
						</div>
						<footer className="card-footer">
							<a className="card-footer-item" onClick={this.Sub}>
								<span className="icon has-text-danger">
									<i className="fa fa-lg fa-minus-circle"></i>
								</span>
							</a>
							<a className="card-footer-item">{this.state.cantidad}</a>
							<a className="card-footer-item" onClick={this.Add}>
								<span className="icon has-text-info">
									<i className="fa fa-lg fa-plus-circle"></i>
								</span>
							</a>
						</footer>
					</div>
				</div>
		  
        );
    }
}

export default Item;