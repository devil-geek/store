import React, { Component } from 'react';

class Cart extends Component {
    render() {
        var listItems = this.props.itemsOnCart.map(function(item) {
			return (
				<div className="box" key={item.id}>
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={process.env.PUBLIC_URL + '/products/'+ item.img} alt={item.nombre}/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{item.nombre}</strong>  <small>${item.precio.toFixed(2)}</small>
                        <br/>
                        {item.desc}
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
			);	
		  }, this);

        return (
            <div>
                { listItems } 
            </div>
        );
    }
}

export default Cart;