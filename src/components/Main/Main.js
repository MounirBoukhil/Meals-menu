import React from 'react'
import Classes from './Main.module.css'
import FoodList from '../FoodList/FoodList'

const Main = function(props){
    return(<main className={Classes.container}>
            <FoodList  />
           </main>)
}
export default Main