import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StoreType} from "./redux/state";
type AppPropsType = {
    store: StoreType
    // dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <Header/>
                <Nav/>
                <div className="lyubaProjectContent">
                    <Route path={'/profile'} render={() => <Profile
                        posts={props.store.getState().profilePage.posts}
                        updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                        newPostText={props.store.getState().profilePage.newPostText}
                        addPost={props.store.addPost.bind(props.store)}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs
                        dialogs={props.store.getState().dialogsPage.dialogs}
                        messages={props.store.getState().dialogsPage.messages}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
