import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '626c8fdd-5a16-475d-a8f7-6220a1497029'
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId.id}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId.id}`
         )
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}
