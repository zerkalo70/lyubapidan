import React, {ChangeEvent} from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/dialogItem";
import Message from "./DialogItem/Message/message";
import {ActionsTypes, DialogType, MessageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";


export type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string

}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogs.map(
        (d: any) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(
        (m: any) => <Message message={m.message}/>);
    let newMessageBody = props.newMessageBody;
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // let body = e.target.value;
        props.dispatch(updateNewMessageBodyAC(e.target.value));
    }

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