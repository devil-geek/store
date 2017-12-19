import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Articulos from './components/Articulos/Articulos';
import Cart from './components/Cart/Cart';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemsOnCart: [],
      total: 0
    }
  }

  AddToCart(item, cantidad) {
    console.log("id " +item.id)
    console.log("cantidad " +cantidad)
    console.log("precio " +item.precio)
    
    if(parseInt(cantidad, 10) > 0){
      let index = this.state.itemsOnCart.indexOf(item);

      console.log(index)
      if(index === -1){ //Agrega e nuevo item
        item.cantidad = cantidad;
        this.setState({
          itemsOnCart: this.state.itemsOnCart.concat([item]),
          total: this.state.total + (item.cantidad * item.precio)
        })
      }
      else if(index > -1){ //Modifica la cantidad
        item.cantidad = cantidad + this.state.itemsOnCart[index].cantidad;
        this.setState((this.state.itemsOnCart, 
          { $splice: [[index, 1, item]] }
        ));
        this.setState({
          total: this.state.total + (cantidad * item.precio)
        }) 
      }

    }
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
                   Articulos
                   <Articulos 
                      handleItemClick={this.AddToCart.bind(this)}
                    />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child">
                 Pedidos
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child pad">
               Carrito
               <Cart
                  itemsOnCart={this.state.itemsOnCart}
                  total={this.state.total}
                />
            </article>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
