import React from "react";
import s from "./dialogs.module.css";
import {NavLink} from "react-router-dom";



const DialogItem = (props: any) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to ={path}>{props.name}</NavLink>
        </div>
    )
}

function Message(props: any) {
return (
    <div className={s.message}>{props.message}</div>
)
}

function Dialogs() {

    let dialogs = [
        {id: 1, name: "Маша"},
        {id: 2, name: "Даша"}
    ]

    let messages = [
        {id: 1, message: "Привет!"},
        {id: 2, message: "Здорово!"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name = {d.name} id = {d.id}/>)

    let messagesElements = messages.map(m => <Message message = {m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name = "Маша" id = "1"/>*/}
                {/*<DialogItem name = "Даша" id = "2"/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message = "Привет"/>*/}
                {/*<Message message = "Здорово!"/>*/}
            </div>
        </div>
    )
}

export default Dialogs;