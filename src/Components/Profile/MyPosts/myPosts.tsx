import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/post";





const MyPosts = (props: any) => {

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
                {/*<Post message={'Привет!'} likesCount={'0'}/>*/}
                {/*<Post message={'Это мой первый пост!'} likesCount={'23'}/>*/}
            </div>
        </div>
    )
}

export default MyPosts;