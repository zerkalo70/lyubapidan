import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import Profile from "./Components/Profile/profile";

function App() {
    return (
        <div className="lyubaProject">
            <Header/>
            <Nav/>
            <div className="lyubaProjectContent">
            <Profile/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
