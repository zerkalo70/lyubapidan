import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux";


const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (newText: any) => {
            let action = changeNewTextAC(newText);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;