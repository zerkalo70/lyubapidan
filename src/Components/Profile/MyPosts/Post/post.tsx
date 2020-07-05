import React from "react";
import s from "./post.module.css";
import Women1 from "./Women1.jpg";

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.post}>
            <img src={Women1} alt="iso"/>
            {props.message}
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;