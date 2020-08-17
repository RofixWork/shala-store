import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import ProductContextProvider from './Global/ProductContext';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <>
    <ProductContextProvider>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path='/products' component={Products}/>
            <Route exact  path='/products/:id' component={Details}/>
            <Route  path='/cart' component={Cart}/>
          </Switch>
        </Router>
    </ProductContextProvider>
    </>
  );
}

export default App;
