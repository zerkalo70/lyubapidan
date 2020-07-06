import React from "react";
import s from "./post.module.css";
import Women1 from "./Women1.jpg";

export type PostType = {
    message: string
    likesCount: number
}

const Post = (props: PostType) => {
    return (
        <div className={s.post}>
            <img src={Women1} alt="iso"/>
            {props.message}
            <div>
                <span>Likes:{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;