import React from "react";
import s from "./dialogs.module.css";





const Dialogs = (props: any) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            </div>
            <div className={s.messages}>
            </div>
        </div>
    )
}

export default Dialogs;