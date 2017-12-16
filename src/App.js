import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Articulos from './components/Articulos/Articulos';
import Cart from './components/Cart/Cart';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemsOnCart: []
    }
  }

  AddToCart(item, cantidad) {
    console.log(item.id)
    console.log(cantidad)
    console.log(item.precio)
    if(parseInt(cantidad, 10) > 0){
      this.setState({
        itemsOnCart: this.state.itemsOnCart.concat([item])
      })
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
            <article className="tile is-child">
               Carrito
               <Cart
                  itemsOnCart={this.state.itemsOnCart}
                />
            </article>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
