import React from "react";
import s from "./profileInfo.module.css";
import LogoF2 from "../../../assets/Images/LogoF2.jpg";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Women3 from "../../../assets/Images/Women3.jpg";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: any) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if (e. target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img className={s.main} src={LogoF2} alt="iso"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || Women3} alt="No Photo"/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status}
                updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;