import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {ActionsTypes, PostType, StoreType} from "../../redux/state";

export type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;