import React, { Component } from "react";
import "./Pedido.css";
var totalp = 0;
class Pedido extends Component {
  render() {
    if (this.props.pedido !== undefined) {
      totalp = this.props.pedido.total;
      var listPedido = this.props.pedido.map(function(pedido) {
        return (
          <div className="column center nopadb is-2-mobile is-2-tablet is-1-desktop is-1-widescreen is-1-fullhd" key={pedido.id}>
            <figure className="center image is-48x48">
              <img
                src={process.env.PUBLIC_URL + "/products/" + pedido.img}
                alt={pedido.nombre}
              />
            </figure>
            <h2 className="center has-text-link bs">x {pedido.cantidad}</h2>
          </div>
        );
      });
    }
    return (
      <article className="media">
        <div className="media-content">
          <div className="columns pedido">
            {listPedido}
          </div>
        </div>
        <div className="media-right right">
              <h2 className="center bs">Total: ${totalp.toFixed(2)}</h2>
              <a className="button is-link" onClick={()=>{this.props.remove(this.props.pedido)}}>
                Listo
              </a>
        </div>
      </article>
    );
  }
}

export default Pedido;
