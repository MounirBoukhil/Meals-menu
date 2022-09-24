import React from 'react'
import Classes from './Dishe.module.css'

const Dishe = function(props){
    return( <div className={Classes.container}>
                <div>
                    <h1>{props.name}</h1>
                    <h3>{props.description}</h3>
                    <h2>${props.price}</h2>
                </div>
                <div>
                    <div id={Classes.amountContainer}>
                        <label>Amounit : </label>
                        <input type="number" min="0"></input> 
                    </div>
                    <div className={Classes.buttonContainer}>
                        <button>+ Add</button>
                    </div>
                </div>
            </div>)
}
export default Dishe;