import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";


class HeaderContainer extends React.Component<any, any> {

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {logout})(HeaderContainer);