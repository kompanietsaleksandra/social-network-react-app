// let dialogsData =
//     [
//         {id: 1, name: 'Deny'},
//         {id: 2, name: 'Alisa'},
//         {id: 3, name: 'Kira'},
//         {id: 4, name: 'Greg'},
//         {id: 5, name: 'Jony'},
//         {id: 6, name: 'Ann'},
//     ];
// let messagesData =
//     [
//         {id: 1, message: 'Hi All!!!'},
//         {id: 2, message: 'How is you doing, bro?'},
//         {id: 3, message: 'I like you)'},
//         {id: 4, message: 'Wooow, hi sweety!'},
//         {id: 5, message: 'Whats up??'},
//         {id: 6, message: 'Good morning, world!!'},
//     ];
// let posts =
//     [
//         {id: 1, message: 'Hi, how are you?', likesCount: '12'},
//         {id: 2, message: 'Its me, hi all', likesCount: 40},
//         {id: 3, message: 'Hello, my name is Dany!', likesCount: 7},
//     ];
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts:  [
            {id: 1, message: 'Hi, how are you?', likesCount: '12'},
            {id: 2, message: 'Its me, hi all', likesCount: 40},
            {id: 3, message: 'Hello, my name is Dany!', likesCount: 7},
        ],
        dialogsData: [
            {id: 1, name: 'Deny'},
            {id: 2, name: 'Alisa'},
            {id: 3, name: 'Kira'},
            {id: 4, name: 'Greg'},
            {id: 5, name: 'Jony'},
            {id: 6, name: 'Ann'},
        ],
    },
    messagesPage: {
        messagesData:  [
            {id: 1, message: 'Hi All!!!'},
            {id: 2, message: 'How is you doing, bro?'},
            {id: 3, message: 'I like you)'},
            {id: 4, message: 'Wooow, hi sweety!'},
            {id: 5, message: 'Whats up??'},
            {id: 6, message: 'Good morning, world!!'},
        ]
    }
};
export let  addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;