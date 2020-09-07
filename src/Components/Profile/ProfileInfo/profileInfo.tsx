import React from "react";
import s from "./profileInfo.module.css";
import LogoF2 from "../../../assets/Images/LogoF2.jpg";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}: any) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img className={s.main} src={LogoF2} alt="iso"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="No Photo"/>
                <ProfileStatusWithHooks status={status}
                updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;