import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

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
//
// let posts =
//     [
//         {id: 1, message: 'Hi, how are you?', likesCount: '12'},
//         {id: 2, message: 'Its me, hi all', likesCount: 40},
//         {id: 3, message: 'Hello, my name is Dany!', likesCount: 7},
//     ];

ReactDOM.render(
  <React.StrictMode>
    <App state={state} posts={state.posts} messagesData={state.messagesData} dialogsData={state.dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
