import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/dialogsContainer";
import UsersContainer from "./Components/Users/usersContainer";
import ProfileContainer from "./Components/Profile/profileContainer";

// type AppPropsType = {
    // store: any
    // dispatch: (action: any) => void
// }

// const App = (props: AppPropsType) => {
const App = () => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <Header/>
                <Nav/>
                <div className="lyubaProjectContent">

                           <Route path='/profile/:userId'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
