import React from 'react';
import './App.css';
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/dialogsContainer";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer from "./Components/Profile/profileContainer";
import HeaderContainer from "./Components/Header/headerContainer";
import Login from "./Components/Login/login";

const App = () => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <HeaderContainer/>
                <Nav/>
                <div className="lyubaProjectContent">

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
