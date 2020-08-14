
// export type ProfileActionsTypes = ReturnType<typeof addPostAC>
//     | ReturnType<typeof changeNewTextAC>


import Women1 from "../assets/Images/Women1.jpg";
import Women2 from "../assets/Images/Women1.jpg";
import Women3 from "../assets/Images/Women1.jpg";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState: any = {
    users: [],
    pageSize: 200,
    totalUsersCount: 0,
    currentPage: 1
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
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }

        default:
            return state
    }
}

export const followAC: any = (userId: any) => {return {type: FOLLOW, userId}};
export const unfollowAC: any = (userId: any) => {return {type: UNFOLLOW, userId}};
export const setUsersAC: any = (users: any) => {return {type: SET_USERS, users}};
export const setCurrentPageAC: any =
    (currentPage: any) => {return {type: SET_CURRENT_PAGE, currentPage}};
export const setUsersTotalCountAC: any =
    (totalUsersCount: any) => {return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}};


export default usersReducer;