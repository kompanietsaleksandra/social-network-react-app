import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./DialogItem/Message/Message";
import DialogItem from "./DialogItem/DialogItem";
// import Redirect from "react-router-dom";
import { Redirect } from 'react-router-dom'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} /> );
    let messagesElements = state.messagesData
        .map( message => <Message message={message.message} /> );
    // let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (props.isAuth === false) return  <Redirect to={"/login"} />

    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;