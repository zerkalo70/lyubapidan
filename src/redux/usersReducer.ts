
import {usersAPI} from "../api/api";
import axios from "axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState: any = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: any) => id != action.userId)
            }

        default:
            return state
    }
}

export const followSuccess: any = (userId: any) => ({type: FOLLOW, userId});
export const unfollowSuccess: any = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsers: any = (users: any) => ({type: SET_USERS, users});
export const setCurrentPage: any = (currentPage: any) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount: any = (totalUsersCount: any) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching: any = (isFetching: any) => ({type: TOGGLE_IS_FETCHING, count: isFetching});
export const toggleFollowingProgress: any = (isFetching: any, userId: any) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage: any, pageSize: any) => {
    return (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize)
        .then((data: any) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId: any) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}


export default usersReducer;