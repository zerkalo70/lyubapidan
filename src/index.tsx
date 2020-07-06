import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let posts = [
    {id: 1, message: 'Привет', likesCount: 12},
    {id: 2, message: 'Это мой первый пост!', likesCount: 21}
]
let dialogs = [
    {id: 1, name: 'Люба'},
    {id: 2, name: 'Маша'},
    {id: 3, name: 'Даша'}
]

let messages = [
    {id: 1, message: 'Я Вас приветствую!'},
    {id: 2, message: 'Привет!'},
    {id: 3, message: 'Здорово!'}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
