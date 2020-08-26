import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId: any = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps: any = (state: any) => ({
    profile: state.profilePage.profile
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile})
)(ProfileContainer);