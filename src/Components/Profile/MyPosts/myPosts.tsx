import React from "react";
import s from "./myPosts.module.css";
import Post, {PostType} from "./Post/post";


export type MyPosts = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPosts) => {

    let postElement = props.posts.map(
        (p: any) => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
        // let text = newPostElement.current?.value;
        props.addPost(newPostElement.current.value);
            newPostElement.current.value = ' ';
    }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts;