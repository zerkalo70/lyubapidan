import React from "react";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

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
class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9748`)
            .then((response: any) => {
                this.props.setUserProfile(response.data.items);
            });
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);