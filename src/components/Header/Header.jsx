import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (<header className={classes.header} >
               <img src='https://pngimg.com/uploads/lego/lego_PNG28.png'/>
               <div className={classes.loginblock}>
                   <NavLink to={'/login'}>Login</NavLink>
               </div>
            </header>
    )
};

export default Header;