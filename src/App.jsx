import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div>
                    <Route path='/messages'
                           render={ () => <Dialogs
                               dialogsData={props.state.dialogsData}
                               messagesData={props.state.messagesData}/> }/>
                    <Route path='/profile'
                           render={ () => <Profile
                               posts={props.state.posts}/> }/>
                </div>
            </div>
      </BrowserRouter>
  );
}


export default App;
