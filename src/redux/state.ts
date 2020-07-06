type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
}
type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
posts: [
    {id: 1, message: 'Привет', likesCount: 12},
    {id: 2, message: 'Это мой первый пост!', likesCount: 21}
]
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
}

export default state;