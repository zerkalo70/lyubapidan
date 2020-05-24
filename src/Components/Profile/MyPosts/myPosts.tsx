import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            <h1>My posts</h1>
            <div>
<textarea>a</textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message = "Здравствуйте!"/>
                <Post message = "Привет!"/>
            </div>
        </div>
    )
}

export default MyPosts;