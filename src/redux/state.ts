import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogsActionsTypes} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
    newMessageBody: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type ActionsTypes = DialogsActionsTypes | ProfileActionsTypes
export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    _callsubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
    messages: Array<MessageType>
    posts: Array<PostType>
    newPostText: string
}

const store: any = {
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
        ],
        newMessageBody: ""
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
    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callsubscriber();
    }
}

// window.state = state;
    export default store;