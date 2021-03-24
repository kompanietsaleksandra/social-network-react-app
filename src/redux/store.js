import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts:  [
                {id: 1, message: 'Hi, how are you?', likesCount: '12'},
                {id: 2, message: 'Its me, hi all', likesCount: 40},
                {id: 3, message: 'Hello, my name is Dany!', likesCount: 7},
            ],
            newPostText: 'new-post.com',
        },
        dialogsPage: {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State is changed')
    },
    getState() {
         return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage =profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar =sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
};


window.store = store;


export default store;