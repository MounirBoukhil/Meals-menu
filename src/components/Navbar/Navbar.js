import React from 'react';
import Cart from '../Cart/Cart'
import classes from "./Navbar.module.css"

const Navbar = function(props){
    return(<div className={classes.navbar}>
                <div className={classes.logo}>ReactMeals</div>
                <Cart onClick={props.onClick}/>
           </div>)
}
export default Navbar;