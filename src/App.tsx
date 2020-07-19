import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <Header/>
                <Nav/>
                <div className="lyubaProjectContent">
                    <Route path={'/profile'} render={() => <Profile
                        posts={props.state.profilePage.posts}
                        updateNewPostText={props.updateNewPostText}
                        newPostText={props.state.profilePage.newPostText}
                        addPost={props.addPost}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dialogs={props.state.dialogsPage.dialogs}
                        messages={props.state.dialogsPage.messages}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
