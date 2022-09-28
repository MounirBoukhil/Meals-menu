import React from 'react';
import classes from './CartResult.module.css';
import Modal from '../UI/Modal/Modal';
const CartResult = function(props){
    const cartItems =<ul className={classes['items-container']}>
                            {[{ id:'c1',
                                name:'sushi',
                                amount:2,
                                price:12.99
                              },].map((item)=><li>{item.name}</li>)
                            }
                     </ul>
    return(
        <Modal hideCart={ props.hideCart }>
            {cartItems}
            <div className={classes['price-container']}>
                <span> totla amount </span>
                <span>35.62</span>
            </div>
            <div className={classes['button-container']}>
                <button className={classes['close-btn']} onClick={props.hideCart}>Close</button>
                <button className={classes['order-btn']}>Order</button>
            </div>
        </Modal >
    )
}

export default CartResult;