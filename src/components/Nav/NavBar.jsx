import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/messages" activeClassName={classes.activeLink}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;