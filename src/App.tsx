import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType} from "./Components/Profile/MyPosts/Post/post";
import {DialogItemType} from "./Components/Dialogs/DialogItem/dialogItem";
import {MessageType} from "./Components/Dialogs/DialogItem/Message/message";
import {RootStateType} from "./redux/state";


type AppPropsType = {
    // posts: Array<PostType>
    // dialogs: Array<DialogItemType>
    // messages: Array<MessageType>
    state: RootStateType
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <Header/>
                <Nav/>
                <div className="lyubaProjectContent">
                    <Route path={'/profile'} render = {
                        () => <Profile posts={props.state.profilePage.posts}/> }/>
                    <Route path={'/dialogs'} render = {
                        () => <Dialogs dialogs={
                            props.state.dialogsPage.dialogs}
                                       messages={props.state.dialogsPage.messages}/> }/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
