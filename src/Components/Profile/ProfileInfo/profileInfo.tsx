import React from "react";
import s from "./profileInfo.module.css";
import LogoF2 from "../../../assets/Images/LogoF2.jpg";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            {/*<div>*/}
            {/*    <img className={s.main} src={LogoF2} alt="iso"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="No Photo"/>
                <ProfileStatus status={props.status}
                updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;