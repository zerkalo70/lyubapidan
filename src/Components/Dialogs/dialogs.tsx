import React from "react";
import s from "./dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/dialogItem";
import Message from "./DialogItem/Message/message";


const Dialogs = (props: any) => {

    let dialogsElement = props.dialogs.map(
        (d: any) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(
        (m: any) => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;