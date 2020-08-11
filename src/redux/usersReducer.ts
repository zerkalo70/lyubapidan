
// export type ProfileActionsTypes = ReturnType<typeof addPostAC>
//     | ReturnType<typeof changeNewTextAC>


import Women1 from "../assets/Images/Women1.jpg";
import Women2 from "../assets/Images/Women1.jpg";
import Women3 from "../assets/Images/Women1.jpg";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState: any = {
    users: []
};

const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followAC: any = (userId: any) => {return {type: FOLLOW, userId}};
export const unfollowAC: any = (userId: any) => {return {type: UNFOLLOW, userId}};
export const setUsersAC: any = (users: any) => {return {type: SET_USERS, users}};


export default usersReducer;