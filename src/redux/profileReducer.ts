import {profileAPI, usersAPI} from "../api/api";

export type ProfileActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState: any = {
    posts: [
        {id: 1, message: 'Привет', likesCount: 12},
        {id: 2, message: 'Это мой первый пост!', likesCount: 21}
    ],
    newPostText: "NewPostText",
    profile: null,
    status: ""
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
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostAC: any = () => ({type: ADD_POST, postMessage: postMessage}) as const
export const setUserProfile: any = (profile: any) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus: any = (status: any) => ({type: SET_STATUS, status}) as const
export const getUserProfile: any = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then((response: any) => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus: any = (userId: any) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then((response: any) => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus: any = (status: any) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then((response: any) => {
            if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
            }
        });
}
export const changeNewTextAC = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText: newText}) as const

export default profileReducer;