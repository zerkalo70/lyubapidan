import React from "react";
import s from "./myPosts.module.css";



const MyPosts = (props: any) => {

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

            </div>
        </div>
    )
}

export default MyPosts;