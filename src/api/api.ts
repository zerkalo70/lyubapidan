import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bf102d8c-cfd2-4d9c-a6c8-a4c689dcc873"
    }
});

export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: any) => {
                return response.data;
            });
    },
    follow(userId: any) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: any) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: any) {
        return instance.get('profile/' + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
        })
    }
}

