import React from "react";
import s from "./message.module.css";

type PropsType = {
    message: string
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;