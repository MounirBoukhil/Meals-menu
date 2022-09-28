import React from 'react';
import Navbar from '../Navbar/Navbar'
import DescriptionCard from '../DescriptionCard/DescriptionCard'
import classes from "./Header.module.css"

const Header = function(props){
    return(
        <div className={classes.header}>
            <Navbar onClick={props.onShowCart}/> 
            <DescriptionCard/>
        </div>
    )
}
export default Header;