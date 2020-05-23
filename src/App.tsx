import React from 'react';
import './App.css';
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Aside from "./Components/Aside/aside";
import Footer from "./Components/Footer/footer";

function App() {
    return (
        <div className="lyubaProject">
            <Header/>
            <Main/>
            <Aside/>
            <Footer/>

        </div>
    );
}

export default App;
