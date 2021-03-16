import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// let posts =
//     [
//         {id: 1, message: 'Hi, how are you?', likesCount: '12'},
//         {id: 2, message: 'Its me, hi all', likesCount: 40},
//         {id: 3, message: 'Hello, my name is Dany!', likesCount: 7},
//     ];

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
};

export default Profile;