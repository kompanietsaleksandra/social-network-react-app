import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={classes.grid}>
                <img src="https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" className={classes.postimg}/>
                <div>{props.message}</div>
            </div>
            <div><span>Like{'  ' + props.likesCount}</span></div>
        </div>
    )
};

export default Post;