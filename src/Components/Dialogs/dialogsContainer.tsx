import React, {ChangeEvent} from "react";
import s from "./dialogs.module.css";
import DialogItem from "./DialogItem/dialogItem";
import Message from "./DialogItem/Message/message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./dialogs";


const DialogsContainer = (props: any) => {
// const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: any) => {
        // let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body));
    }

    return (
       <Dialogs updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}/>
    )
}

export default DialogsContainer;