import React from "react";
import {addPostAC, changeNewTextAC} from "../../../redux/profileReducer";
import MyPosts from "./myPosts";


// type MyPostsContainerPropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     addPost: (postMessage: string) => void
//     updateNewPostText: (newText: string) => void
//     dispatch: (action: ProfileActionsTypes) => void
// }



const MyPostsContainer = (props: any) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText));
    }

    const onPostChange = (newText: any) => {
        let action = changeNewTextAC(newText);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;