import React from "react";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";

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
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;