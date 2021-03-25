import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

// store={props.store profile dialogs

function App(props) {
  return (
      <BrowserRouter>
            <div className="App">
                <HeaderContainer />
                <NavBar/>
                <div>
                    <Route path='/messages'
                           render={ () => <DialogsContainer
                               /> }/>
                    <Route path='/profile/:userId?'
                               render={ () => <ProfileContainer
                               /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer/> }/>
                </div>
            </div>
      </BrowserRouter>
  );
}


export default App;
