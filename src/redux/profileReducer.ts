import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type ProfileActionsTypes = ReturnType<typeof addPostAC>


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState: any = {
    posts: [
        {id: 1, message: 'Привет', likesCount: 12},
        {id: 2, message: 'Это мой первый пост!', likesCount: 21}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: any = {
                id: 3,
                message: action.newPostText,
                likesCount: 10
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case DELETE_POST:
            return {...state, posts: state.posts.filter((p: any) => p.id != action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPostAC: any = (newPostText: any) => ({type: ADD_POST, newPostText}) as const
export const setUserProfile: any = (profile: any) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus: any = (status: any) => ({type: SET_STATUS, status}) as const
export const deletePost: any = (postId: any) => ({type: DELETE_POST, postId}) as const
export const getUserProfile: any = (userId: any) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const savePhotoSuccess: any = (photos: any) => ({type: SAVE_PHOTO_SUCCESS, photos}) as const

export const getStatus: any = (userId: any) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus: any = (status: any) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto: any = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile: any = (profile: any) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}



export default profileReducer;