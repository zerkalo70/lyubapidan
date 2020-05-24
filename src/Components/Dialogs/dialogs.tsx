import React from "react";
import s from "./dialogs.module.css";
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to = "/dialogs/1">Маша</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to = "/dialogs/1">Даша</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Привет!</div>
                <div className={s.message}>Здорово!</div>
            </div>
        </div>
    )
}

export default Dialogs;