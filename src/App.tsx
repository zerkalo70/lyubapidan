import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props: any) => {

    return (
        <BrowserRouter>
            <div className="lyubaProject">
                <Header/>
                <Nav/>
                <div className="lyubaProjectContent">
                    {/*<Route path={'/profile'} component = { Profile }/>*/}
                    {/*<Route path={'/dialogs'} component = { Dialogs }/>*/}

                    <Route path={'/profile'} render = {
                        () => <Profile posts={props.posts}/> }/>
                    <Route path={'/dialogs'} render = {
                        () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> }/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
