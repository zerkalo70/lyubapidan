import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "Hello!", likesCount: 10},
    {id: 2, message: "Yo-Yo!", likesCount: 11}
];

let dialogs = [
    {id: 1, name: "Маша"},
    {id: 2, name: "Даша"}
];

let messages = [
    {id: 1, message: "Привет!"},
    {id: 2, message: "Здорово!"}
];

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts}
             dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
