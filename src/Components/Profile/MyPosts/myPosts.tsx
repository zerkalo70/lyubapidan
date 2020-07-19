import React, {ChangeEvent} from "react";
import s from "./myPosts.module.css";
import Post from "./Post/post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postElement = props.posts.map(
        (p) => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        props.addPost(props.newPostText);
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;