import React, {ChangeEvent} from "react";
import s from "./myPosts.module.css";
import Post from "./Post/post";
import {addPostAC, changeNewTextAC, ProfileActionsTypes} from "../../../redux/profileReducer";
import {PostType} from "../../../redux/state";


// type MyPostsPropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     addPost: (postMessage: string) => void
//     updateNewPostText: (newText: string) => void
//     dispatch: (action: ProfileActionsTypes) => void
// }



// const MyPosts = (props: MyPostsPropsType) => {
const MyPosts = (props: any) => {

    let postElement = props.posts.map(
        (p: any) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let newText: any = newPostElement.current?.value;
        props.updateNewPostText(newText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange} ref={newPostElement}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;