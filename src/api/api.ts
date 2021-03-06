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
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId: any) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId: any) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status: any) {
        return instance.put('profile/status', {status: status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: any) {
        return instance.put('profile', profile);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {});
    },
    login(email: any, password: any, rememberMe: any = false, captcha: any = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

