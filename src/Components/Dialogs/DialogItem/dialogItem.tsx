import React from "react";
import s from "./dialogItem.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: string
    name: string
}

const DialogItem = (props: PropsType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;