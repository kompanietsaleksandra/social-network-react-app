const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Deny'},
        {id: 2, name: 'Alisa'},
        {id: 3, name: 'Kira'},
        {id: 4, name: 'Greg'},
        {id: 5, name: 'Jony'},
        {id: 6, name: 'Ann'},
    ],
    messagesData:  [
        {id: 1, message: 'Hi All!!!'},
        {id: 2, message: 'How is you doing, bro?'},
        {id: 3, message: 'I like you)'},
        {id: 4, message: 'Wooow, hi sweety!'},
        {id: 5, message: 'Whats up??'},
        {id: 6, message: 'Good morning, world!!'},
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData,  {id: 7, message: body}]
        };
            // stateCopy.newMessageBody = '';
            // stateCopy.messagesData.push( {id: 7, message: body},);
            // return stateCopy;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;
