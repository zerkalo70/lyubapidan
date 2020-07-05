import React from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/dialogItem";
import Message from "./DialogItem/Message/message";

type DialogType = {
    id: string
    name: string
}

type MessagesType = {
    id: string
    message: string
}

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}

const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m =>
        <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;