import React from 'react';
import Navbar from '../Navbar/Navbar'
import DescriptionCard from '../DescriptionCard/DescriptionCard'
import classes from "./Header.module.css"

const Header = function(){
    return(
        <div className={classes.header}>
            <Navbar/> 
            <DescriptionCard/>
        </div>
    )
}
export default Header;