import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/post";

function MyPosts() {
    return (
            <div className={s.myPosts}>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}

export default MyPosts;