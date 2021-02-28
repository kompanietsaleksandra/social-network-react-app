import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./DialogItem/Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    // let dialogsData =
    //     [
    //         {id: 1, name: 'Deny'},
    //         {id: 2, name: 'Alisa'},
    //         {id: 3, name: 'Kira'},
    //         {id: 4, name: 'Greg'},
    //         {id: 5, name: 'Jony'},
    //         {id: 6, name: 'Ann'},
    //     ];

    let dialogsElements = props.dialogsData
        .map (dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    // let messagesData =
    //     [
    //         {id: 1, message: 'Hi All!!!'},
    //         {id: 2, message: 'How is you doing, bro?'},
    //         {id: 3, message: 'I like you)'},
    //         {id: 4, message: 'Wooow, hi sweety!'},
    //         {id: 5, message: 'Whats up??'},
    //         {id: 6, message: 'Good morning, world!!'},
    //     ];

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