
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
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    _callsubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const addPostAC = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

const store: StoreType = {
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
    _callsubscriber() {
        console.log('State');
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callsubscriber = observer;
    },

    addPost(postMessage: string) {
        const newPost: PostType = {
            id: 3,
            message: postMessage,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callsubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callsubscriber();
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostType = {
                id: 3,
                message: action.postMessage,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callsubscriber();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber();
        }
    }
}

// window.state = state;
    export default store;