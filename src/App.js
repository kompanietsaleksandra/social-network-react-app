import './App.css';
import React from 'react';
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


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
                    <Route path='/login'
                           render={ () => <Login/> }/>
                </div>
            </div>
      </BrowserRouter>
  );
}


export default App;
