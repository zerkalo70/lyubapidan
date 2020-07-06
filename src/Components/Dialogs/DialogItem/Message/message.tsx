import React from "react";
import s from "./message.module.css";


const Message = (props: any) => {
    return (
        <div className={s.dialogItem}>{props.message}</div>
    )
}

export default Message;