import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/myPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PostType, StoreType} from "../../redux/state";
import {ProfileActionsTypes} from "../../redux/profileReducer";
import MyPostsContainer from "./MyPosts/myPostsContainer";
// import store from "../../redux/reduxStore";

// export type ProfilePropsType = {
    // posts: Array<PostType>
    // newPostText: string
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: ProfileActionsTypes) => void
    // store: StoreType
    // store: any
// }

// const Profile = (props: ProfilePropsType) => {
const Profile = (props: any) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                              // posts={props.profilePage.posts}
                              // updateNewPostText={props.updateNewPostText}
                              // newPostText={props.newPostText}
                              // addPost={props.addPost}
                              // dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;