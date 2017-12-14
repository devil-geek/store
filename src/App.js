import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Articulos from './components/Articulos/Articulos';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent">
                <article className="tile is-child">
                   Articulos
                   <Articulos/>
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
            </article>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
