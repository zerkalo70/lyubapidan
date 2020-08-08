import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/reduxStore";
import DialogsContainer from "./Components/Dialogs/dialogsContainer";

// type AppPropsType = {
    // store: any
    // dispatch: (action: any) => void
// }

// const App = (props: AppPropsType) => {
const App = (props: any) => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <Header/>
                <Nav/>
                <div className="lyubaProjectContent">
                    <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}
                        // dialogs={props.store.getState().dialogsPage.dialogs}
                        // messages={props.store.getState().dialogsPage.messages}
                        // newMessageBody={props.store.getState().dialogsPage.newMessageBody}
                        // dispatch={props.store.dispatch.bind(props.store)}
                        // dispatch={props.store.dispatch}
                    />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
