import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";
import Dialogs from "./Components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="lyubaProject">
            <Header/>
            <Nav/>
            <div className="lyubaProjectContent">
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
            {/*<Profile/>*/}
            {/*<Dialogs/>*/}
            </div>
            <Footer/>
        </div>
        </BrowserRouter>
    );
}

export default App;
