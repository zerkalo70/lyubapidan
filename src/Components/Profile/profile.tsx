import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";



const Profile = (props: any) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;