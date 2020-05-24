import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";


function Profile() {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
            </div>
    )
}

export default Profile;