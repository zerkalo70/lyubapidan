import React, {ChangeEvent} from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/dialogItem";
import Message from "./DialogItem/Message/message";
import {Redirect} from "react-router-dom";



const Dialogs = (props: any) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(
        (d: any) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(
        (m: any) => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Введите сообщение'}>
                    </textarea></div>
                    <div><button onClick={onSendMessageClick}>Отправить</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;