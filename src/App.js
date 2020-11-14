
import React, { Component } from 'react'  
import './App.css';
import BootstrapCarousel from './Components/Carosal'
import Album from './Components/album';
import Cardstwo from './Components/Cards';
import Container3 from './Components/Container3';
import Container4 from './Components/Container4';
import Cart from './Components/ShoppingCart.js/Cart';
import Payment from './Components/ShoppingCart.js/Payment';
// import PrimarySearchAppBar from './Components/NavBar';
import Profile from './Components/ShoppingCart.js/Profile';
import Routers from './Components/Router/Router';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import CenteredGrid from './Components/ShoppingCart.js/Cart';
import HomePage1 from './Components/Pages/Home';
import PaymentForm from './Components/ShoppingCart.js/PaymentForm';
import  NavBar from './Components/NavBar';
import Footer from './Components/Pages/Footer';
import ProfileUpdate from './Components/ShoppingCart.js/ProfileUpdate';
import NavBarBelow from './Components/ShoppingCart.js/NavBarBelow';
import ProductSelect from './Components/ShoppingCart.js/Products/ProductListPage';
const App = () => (
  <>
 

<BrowserRouter>

<div className="router">
<NavBar/>
 <NavBarBelow/>
 <div className="app_container">
<Route exact path="/" component={HomePage1}/>
<Route  path="/Cart" component={CenteredGrid}/>
<Route  path="/Payment" component={Payment}/>
<Route  path="/profile" component={Profile}/>
<Route  path="/shoponline" component={HomePage1}/>
<Route  path="/paymentForm" component={PaymentForm}/>
<Route  path="/ProfileUpdate" component={ProfileUpdate}/>
<Route  path="/ProductSelect" component={ProductSelect}/>
</div>
    
</div>
</BrowserRouter>
 
  
  
  <Footer/>

  </>
);

export default App;
  