import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = () => {

    // let state = props.store.getState().dialogsPage;
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator());
    // };
    // let onNewMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body));
    // };
    //
    // return (
    //     <StoreContext.Consumer>
    //         { (store) => {
    //             // let state = store.getState().dialogsPage;
    //
    //             let onSendMessageClick = () => {
    //                 store.dispatch(sendMessageCreator());
    //             };
    //             let onNewMessageChange = (body) => {
    //                 store.dispatch(updateNewMessageBodyCreator(body));
    //             };
    //             return <Dialogs updateNewMessageBody={onNewMessageChange}
    //                             sendMessage={onSendMessageClick}
    //                             dialogsPage={store.getState().dialogsPage}
    //             />
    //         }
    //
    //     }
    //
    //     </StoreContext.Consumer>
    //
    // )
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);