import React from "react";
import s from "./dialogItem.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

function DialogItem(props: PropsType) {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;