import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/post";

type PostsType = {
    id: string
    message: string
    likesCount: number
}

type PropsType = {
    posts: Array<PostsType>
}

function MyPosts(props: PropsType) {

    let postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>a</textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;