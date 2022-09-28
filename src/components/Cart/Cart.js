import React from 'react'
import classes from './Cart.module.css'

const Cart =function(props){
    return(
            <div className={classes.icon}>
                <button onClick={props.onClick}>Your Cart</button>
            </div>
    )
}

export default Cart;