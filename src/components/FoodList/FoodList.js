import React from 'react'
import Classes from './FoodList.module.css'
import Dishe from '../Dishe/Dishe'

const dishes = [
                {name:"Sushi",
                 description:"Finest fish and veggies",
                 price:22.9,
                },
                {name:"Schnitzel",
                 description:"A german specialty",
                 price:16.50,
                },
                {name:"Barbecue burger",
                 description:"American, raw, meaty",
                 price:12.99,
                },
                {name:"Green Bowl",
                 description:"Healthy ...and green...",
                 price:18.99,
                },
            ]

const FoodList = function(){
    return( <div className={Classes.container}>
                {dishes.map((dishe)=>{
                        return(<Dishe 
                                    name={dishe.name} 
                                    description={dishe.description} 
                                    price={dishe.price}
                                />
                              )}
                )}
            </div>)
}

export default FoodList;