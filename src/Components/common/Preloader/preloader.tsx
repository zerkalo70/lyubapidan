import React from "react";
import loading5 from "../../../assets/Images/loading5.gif";
import s from "./preloader.module.css"

let Preloader: any = () => {
    return <div className={s.preloader}>
        <img src={loading5} alt="iso"/>
    </div>
}

export default Preloader;