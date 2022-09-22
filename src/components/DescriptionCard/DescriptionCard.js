import React from 'react'
import classes from './DescriptionCard.module.css'

const DescriptionCard= function(){
    return(
            <div className={classes.containerL} >
                <h1>Delicious Food, Delivered To You</h1>
                <p>choose your favorite meal from our bread selection of a 
                    available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high-quality ingredients, 
                    just in time and course by experience chef</p>
            </div>
            )
}

export default DescriptionCard;