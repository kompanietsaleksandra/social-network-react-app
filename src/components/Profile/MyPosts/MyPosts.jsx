import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElement =
        props.posts.map( post =>  <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.content}>
            <div className={classes.imgfoto}>
                <img src='https://pbs.twimg.com/profile_images/1289880617807560706/XZHuHLNb.jpg'/>
            </div>
            <div className={classes.grid}>
                <h3 className={classes.gridItem}>
                    My posts
                </h3>
                <div className={classes.gridItem}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div className={classes.gridItem}>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;