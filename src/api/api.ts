import  axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bf102d8c-cfd2-4d9c-a6c8-a4c689dcc873"
    }
});

export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}& count=${pageSize}`)
            .then((response: any) => {
                return response.data;
            });
    }
}

// export const getUsers = (currentPage: any, pageSize: any) => {
//     return axios.get(baseUrl + `users?page=${currentPage}& count=${pageSize}`,
//         {withCredentials: true})
//         .then(response => {
//             return response.data;
//         });
// }