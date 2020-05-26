import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";

type PostsType = {
    id: string
    message: string
    likesCount: number
}

type PropsType = {
    posts: Array<PostsType>
}


function Profile(props: PropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;