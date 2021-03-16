import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./DialogItem/Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = props.messagesData
        .map( message => <Message message={message.message}/> );

    return (
        <div className={classes.wrapper}>
            <div className={classes.grid}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
};

export default Dialogs;