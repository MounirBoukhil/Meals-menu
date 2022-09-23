import React from 'react'
import Classes from './Dishe.css'

const Dishe = function(props){
    return( <div className={Classes.container}>
                <h1>{props.name}</h1>
                <h3>{props.description}</h3>
                <h2>{props.price}</h2>
            </div>)
}
export default Dishe;