import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={classes.header} >
            <div><img src='https://static.vecteezy.com/system/resources/previews/001/187/487/non_2x/heart-logo-png.png'/></div>
               <div className={classes.loginblock}>
                   {props.isAuth ? props.login :  <NavLink to={'/login'}>Login</NavLink>}
               </div>
            </header>
    )
};

export default Header;