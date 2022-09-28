import React,{useState} from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CartResult from './components/CartResult/CartResult';
import './App.css';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false)

  const showCartHandler = function(){setCartIsShown(true)}
  const hideCartHandler = function(){setCartIsShown(false)}
  return (
    <div className="App">
      {cartIsShown && <CartResult hideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Main/> 
    </div>
  );
}

export default App;
