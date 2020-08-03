import React from "react";
import s from "./dialogItem.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: any) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;