// export type ProfileActionsTypes = ReturnType<typeof addPostAC>
//     | ReturnType<typeof changeNewTextAC>



const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState: any = {
    users: [],
    pageSize: 500,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const follow: any = (userId: any) => ({type: FOLLOW, userId});
export const unfollow: any = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsers: any = (users: any) => ({type: SET_USERS, users});
export const setCurrentPage: any = (currentPage: any) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount: any = (totalUsersCount: any) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching: any = (isFetching: any) => ({type: TOGGLE_IS_FETCHING, count: isFetching});


export default usersReducer;