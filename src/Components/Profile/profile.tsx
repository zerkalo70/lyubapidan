import React from "react";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/myPostsContainer";


const Profile = (props: any) => {

    return (
        <div className={s.profile}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;