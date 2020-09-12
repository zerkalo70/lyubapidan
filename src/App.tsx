import React from 'react';
import './App.css';
import Footer from "./Components/Footer/footer";
import Nav from "./Components/Navigation/nav";
import {Route} from "react-router-dom";
import UsersContainer from "./Components/Users/usersContainer";
import HeaderContainer from "./Components/Header/headerContainer";
import Login from "./Components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/common/Preloader/preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/profileContainer'));

class App extends React.Component<any, any> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="lyubaProject">
                <HeaderContainer/>
                <Nav/>
                <div className="lyubaProjectContent">

                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>

                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>

                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized
})

export default compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
