import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = "lyubapidan/auth/SET_USER_DATA";

let initialState: any = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData: any = (userId: any, email: any, login: any, isAuth: any) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthUserData: any = () => async (dispatch: any) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login: any = (email: any, password: any, rememberMe: any) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout: any = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;