import React from "react";
import s from "./profileInfo.module.css";
import LogoF2 from "../../../assets/Images/LogoF2.jpg";
import Preloader from "../../common/Preloader/preloader";
import Women from "../../../assets/Images/Women3.jpg"

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        // return <img className={s.NoPhoto} src={Women} alt='iso'/>
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.main} src={LogoF2} alt="iso"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="No Photo"/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;