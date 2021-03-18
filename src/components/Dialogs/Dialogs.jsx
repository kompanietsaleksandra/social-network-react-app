import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./DialogItem/Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = state.messagesData
        .map( message => <Message message={message.message}/> );
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       placeholder='Enter your message'
                                       onChange={onNewMessageChange}
                        ></textarea></div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;