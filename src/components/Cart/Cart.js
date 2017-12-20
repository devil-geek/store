import React, { Component } from "react";
import icon from "./cart.png";
import "./Cart.css";

class Cart extends Component {

  render() {
   
    var listItems = this.props.itemsOnCart.map(function(item) {
      return (
        <div className="box pad" key={item.id}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src={process.env.PUBLIC_URL + "/products/" + item.img}
                  alt={item.nombre}
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{item.nombre}</strong>{" "}
                  <strong className=" has-text-link bs">x {item.cantidad}</strong>
                  <span className="mov"><br />Precio: ${item.precio.toFixed(2) }</span>
                  <br/>
                  <span className="mov">Total: </span>${(item.precio * item.cantidad).toFixed(2) }
                </p>
              </div>
            </div>
            <div className="media-right">
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item has-text-danger"  onClick={()=>{this.props.modCant("sub",item)}}>
                    <span className="icon">
                      <i className="fa fa-lg fa-minus-circle" />
                    </span>
                  </a>
                  <a className="level-item has-text-info" onClick={()=>{this.props.modCant("add",item)}}>
                    <span className="iconl">
                      <i className="fa fa-lg fa-plus-circle" />
                    </span>
                  </a>
                  <a className="level-item has-text-dark" onClick={() => {this.props.remove(item)}}>
                    <span className="icon">
                      <i className="fa fa-lg fa-trash" />
                    </span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      );
    }, this);
    let empty = this.props.total === 0 ? 'disabled' : '';
    return (
      <div>
        <div className="box boxs">
          <article className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img src={icon} alt="shop cart" />
              </figure>
            </div>
            <div className="media-content bs">Total: $ {this.props.total.toFixed(2)}</div>
            <div className="media-right">
              <a className={"button is-link" + empty} onClick={this.props.pedir}>Pagar</a>
            </div>
          </article>
        </div>
        {listItems}
      </div>
    );
  }
}

export default Cart;
