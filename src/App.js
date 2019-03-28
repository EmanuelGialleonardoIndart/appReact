import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './Store';
import Header from './Components/Header';
import Productos from './Components/Productos';
import NuevoProducto from './Components/NuevoProducto';
import EditarProducto from './Components/EditarProducto';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <React.Fragment>
                    <Header/>
                    <div className="container">
                       <Switch>
                          <Route exact path="/" component={Productos}/>
                          <Route exact path="/productos/nuevo" component={NuevoProducto}/>
                          <Route exact path="/productos/editar/:id" component={EditarProducto}/>
                       </Switch>
                    </div>
              </React.Fragment>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
