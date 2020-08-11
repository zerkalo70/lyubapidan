import React from "react";
import s from "./profileInfo.module.css";
import LogoF2 from "../../../assets/Images/LogoF2.jpg";


const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.main} src={LogoF2} alt="iso"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;