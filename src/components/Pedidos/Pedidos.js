import React, { Component } from "react";
import icon from "./pay.jpg";
import Pedido from '../Pedido/Pedido';

class Pedidos extends Component {
  render() {
      var listPedidos = this.props.pedidos.map(function(pedido,index){
          return(
            <Pedido key={index}
                remove={()=>{this.props.removeP}}
                pedido={pedido}
            />
          )
      })
    
    return (
      <div>
        <div className="box boxs">
          <article className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img src={icon} alt="shop cart" />
              </figure>
            </div>
            <div className="media-content bs">
              Pedidos
            </div>
            <div className="media-right">
            <span className="tag is-info is-medium is-rounded bs">{this.props.pedidos.length}</span>
            </div>
          </article>
          <br/>
          {listPedidos}
        </div>
        
      </div>
    );
  }
}

export default Pedidos;
