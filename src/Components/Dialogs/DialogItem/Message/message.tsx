import React from "react";
import s from "./message.module.css";

export type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialogItem}>{props.message}</div>
    )
}

export default Message;