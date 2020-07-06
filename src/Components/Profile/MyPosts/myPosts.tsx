import React from "react";
import s from "./myPosts.module.css";
import Post, {PostType} from "./Post/post";


export type MyPosts = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPosts) => {

    let postElement = props.posts.map(
        (p: any) => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;