// export type ProfileActionsTypes = ReturnType<typeof addPostAC>
//     | ReturnType<typeof changeNewTextAC>


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USER_DATA = "SET_USER_DATA";


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
                ...action.data,
                isAuth: true
                }
        default:
            return state;
    }
}

export const setAuthUserData: any = (userId: any, email: any, login: any) =>
    ({type: SET_USER_DATA, data: {userId, email, login}});

export default authReducer;