import React from "react";
import s from "./post.module.css";
import Women1 from "./Women1.jpg";


const Post = (props: any) => {
    return (
        <div className={s.post}>
            <img src={Women1} alt="iso"/>

            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;