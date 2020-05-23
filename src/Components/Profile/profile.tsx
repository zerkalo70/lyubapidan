import LogoF2 from "./Images/LogoF2.jpg";
import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";

function Profile() {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.main} src={LogoF2} alt="iso"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
            </div>
    )
}

export default Profile;