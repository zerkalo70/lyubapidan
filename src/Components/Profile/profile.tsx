import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PostType} from "./MyPosts/Post/post";

export type Profile = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const Profile = (props: Profile) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;