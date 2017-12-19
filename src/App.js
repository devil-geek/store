import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Articulos from './components/Articulos/Articulos';
import Cart from './components/Cart/Cart';
import Pedidos from './components/Pedidos/Pedidos';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemsOnCart: [],
      total: 0,
      pedidos: []
    }
  }

  AddToCart = (item, cantidad) => {
    // console.log("id " +item.id)
    // console.log("cantidad " +cantidad)
    // console.log("precio " +item.precio)
    
    if(parseInt(cantidad, 10) > 0){
      let index = this.state.itemsOnCart.indexOf(item);

      if(index === -1){ //Agrega e nuevo item
        item.cantidad = cantidad;
        this.setState({
          itemsOnCart: this.state.itemsOnCart.concat([item]),
          total: this.state.total + (item.cantidad * item.precio)
        })
      }
      else if(index > -1){ //Modifica la cantidad
        item.cantidad = cantidad + this.state.itemsOnCart[index].cantidad;
        let aux = this.state.itemsOnCart;
        aux.splice(index,1,item);
        this.setState({
          itemsOnCart: aux,
          total: this.state.total + (cantidad * item.precio)
        }) 
      }

    }
  }

  RemoveFromCart = (item) =>{
    let index = this.state.itemsOnCart.indexOf(item);
    let aux = this.state.itemsOnCart;
    aux.splice(index,1);
    this.setState({
      itemsOnCart: aux,
      total: this.state.total - (item.cantidad * item.precio)
    })
  }

  Pedir = () =>{
    let pedido = this.state.itemsOnCart;
    pedido.total = this.state.total;
    this.setState({
      itemsOnCart: [],
      total: 0,
      pedidos: this.state.pedidos.concat([pedido])
    })
  }

  RemovePedido = (pedido) =>{
    let index = this.state.pedidos.indexOf(pedido);
    let aux = this.state.pedidos;
    aux.splice(index,1);
    this.setState({
      pedidos: aux
    })
  }

  Cantidad = (action, item) =>{
    let index = this.state.itemsOnCart.indexOf(item);
    let aux = this.state.itemsOnCart;
    let t = this.state.total;
    if(action === "add"){
      item.cantidad = item.cantidad + 1;
      t = this.state.total + item.precio;
    }
    else{
      if(item.cantidad > 1){
        item.cantidad = item.cantidad - 1;
        t = this.state.total - item.precio;
      }
    }
    aux.splice(index,1,item);
    this.setState({
      itemsOnCart: aux,
      total: t
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child pad">
                   <Articulos 
                      handleItemClick={this.AddToCart}
                    />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                 <Pedidos
                  pedidos={this.state.pedidos}
                  removeP={this.RemovePedido}
                 />
                 
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child pad">
               <Cart
                  itemsOnCart={this.state.itemsOnCart}
                  total={this.state.total}
                  remove={this.RemoveFromCart}
                  pedir={this.Pedir}
                  modCant={this.Cantidad}
                />
            </article>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
