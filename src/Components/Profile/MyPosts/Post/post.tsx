import React from "react";
import s from "./post.module.css";
import Women1 from "./Women1.jpg"

type PropsType = {
    message: string
}

function Post(props: PropsType) {
    return (
                <div className={s.post}>
                    <img src={Women1} alt="iso"/>
                        {props.message}
                </div>
    )
}

export default Post;