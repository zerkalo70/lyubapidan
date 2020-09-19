import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from "./profileInfo.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}: any) => {
    return  <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name</b>:
            {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>:
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills</b>: {profile.lookingForAJob ? "yes" : "no"}
            {createField("My professional skills", "lookingForAJobDescription",
                [], Textarea)}
        </div>

        <div>
            <b>About me</b>: {profile.aboutMe}
            {createField("About me", "about me",
                [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm: any = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm;
// export default ProfileDataForm;