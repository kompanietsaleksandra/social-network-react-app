import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

// store={props.store profile dialogs

function App(props) {
  return (
      <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div>
                    <Route path='/messages'
                           render={ () => <DialogsContainer
                               /> }/>
                    <Route path='/profile'
                               render={ () => <Profile
                                   store={props.store}
                               /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer/> }/>
                </div>
            </div>
      </BrowserRouter>
  );
}


export default App;
