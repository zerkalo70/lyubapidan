export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState: any = {
    posts: [
        {id: 1, message: 'Привет', likesCount: 12},
        {id: 2, message: 'Это мой первый пост!', likesCount: 21}
    ],
    newPostText: "NewPostText",
    profile: null
}

const profileReducer = (state = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: any = {
                id: 3,
                message: state.newPostText,
                likesCount: 10
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostAC: any = () => ({type: "ADD-POST", postMessage: postMessage}) as const
export const setUserProfile: any = (profile: any) => ({type: "SET_USER_PROFILE", profile}) as const
export const changeNewTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}) as const

export default profileReducer;