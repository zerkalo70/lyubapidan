import React from "react";
import s from "./message.module.css";

type PropsType = {
    message: string
}

const Message = (props: PropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;