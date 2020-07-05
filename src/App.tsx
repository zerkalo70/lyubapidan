import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type DialogType = {
    id: string
    name: string
}

type MessagesType = {
    id: string
    message: string
}

type PostsType = {
    id: string
    message: string
    likesCount: number
}

type PropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}

const App = (props: PropsType) => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <Header/>
                <Nav/>
                <div className="lyubaProjectContent">
                    <Route path='/profile'
                           render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={props.dialogs}
                               messages={props.messages}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
