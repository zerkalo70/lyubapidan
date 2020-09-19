import React, {useState} from "react";
import s from "./profileInfo.module.css";
import LogoF2 from "../../../assets/Images/LogoF2.jpg";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Women3 from "../../../assets/Images/Women3.jpg";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: any) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if (e. target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData: any) => {
        saveProfile(formData). then(
            () => {
                setEditMode(false);
            }
        );

    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.main} src={LogoF2} alt="iso"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || Women3} alt="No Photo"/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}}
                                   profile={profile} isOwner={isOwner}/>}

                <ProfileStatusWithHooks status={status}
                updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}: any) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}: any) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;