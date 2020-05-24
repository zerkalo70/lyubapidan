import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/post";

function MyPosts() {
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
                <Post message="Здравствуйте!"/>
                <Post message="Привет!"/>
            </div>
        </div>
    )
}

export default MyPosts;