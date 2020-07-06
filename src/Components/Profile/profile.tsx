import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PostType} from "./MyPosts/Post/post";

export type Profile = {
    posts: Array<PostType>
}

const Profile = (props: Profile) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;