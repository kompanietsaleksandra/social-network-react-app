import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10);
const MyPosts = (props) => {

    let postsElement =
        props.posts.map( post =>  <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
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
              <AddNewPostRedux onSubmit={onAddPost}/>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required,maxLength10]}  name="newPostText" component={Textarea} placeholder={"Post message"}/>
            <div className={classes.gridItem}>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;