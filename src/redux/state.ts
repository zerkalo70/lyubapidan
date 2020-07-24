
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let store = {
    _state: {
    profilePage: {
        posts: [
            {id: 1, message: 'Привет', likesCount: 12},
            {id: 2, message: 'Это мой первый пост!', likesCount: 21}
        ],
        newPostText: "NewPostText"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Люба'},
            {id: 2, name: 'Маша'},
            {id: 3, name: 'Даша'}
        ],

        messages: [
            {id: 1, message: 'Я Вас приветствую!'},
            {id: 2, message: 'Привет!'},
            {id: 3, message: 'Здорово!'}
        ]
    },
    sidebar: {}
},
    getState() {
        return this._state
    },
    _callsubscriber(state: RootStateType) {
        console.log('State');
    },
    addPost(postMessage: string) {
        const newPost: PostType = {
            id: 3,
            message: postMessage,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callsubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callsubscriber(this._state);
    },
    subscribe(observer: any) {
        this._callsubscriber = observer;
    }
}

// let rerenderEntireTree = (state: RootStateType) => {
//     console.log('State');
// }

// const state: RootStateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Привет', likesCount: 12},
//             {id: 2, message: 'Это мой первый пост!', likesCount: 21}
//         ],
//         newPostText: "NewPostText"
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Люба'},
//             {id: 2, name: 'Маша'},
//             {id: 3, name: 'Даша'}
//         ],
//
//         messages: [
//             {id: 1, message: 'Я Вас приветствую!'},
//             {id: 2, message: 'Привет!'},
//             {id: 3, message: 'Здорово!'}
//         ]
//     },
//     sidebar: {}
// }

// export const addPost = (postMessage: string) => {
//     const newPost: PostType = {
//         id: 3,
//         message: postMessage,
//         likesCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = "";
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// };

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer;
// }

// window.state = state;
    export default store;