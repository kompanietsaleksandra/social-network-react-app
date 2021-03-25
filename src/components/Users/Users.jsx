import React from 'react';
import userPhoto from "../../assets/images/user.jpg";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount =  Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={classes.container}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                    onClick={(e) => {props.onPageChanged(p)}}
                    >{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
            <span>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small: userPhoto} className={classes.userPhoto}/>
                </NavLink>
                <div>
                    {u.followed ? <button onClick={() => {props.unfollow(u.id) }}>UnFollow</button>
                        : <button onClick={() => {props.follow(u.id) }}>Follow</button>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>
                        {'u.location.country'}
                    </div>
                    <div>
                        {'u.location.city'}
                    </div>
                </span>
            </span>
            </div>)}
        </div>
    )
};

export default Users;