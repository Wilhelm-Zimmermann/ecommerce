import axios from 'axios'
import { getToken,logout } from './auth'

const api = axios.create({
    baseURL : "http://localhost:8081"
})

api.interceptors.request.use(
    async config => {
    // We get the token which is stored on the local storage
    const token = getToken()

    if(token){
        // Here we config the 'Bearer Token' for the private routes
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
    },
    err => {
        return Promise.reject(err)
    }
)

// This function bellow intercept the response,which we receive from the backend
api.interceptors.response.use(
    // We need to put to return the response,else our application will broken
    // Try to remove the response block to see what happens ('it will broken our response from backend')
    response => {
        return response
    },
    // The error block will active when we receive the error 401
    // If you look on then backend this error will active when we dont have the token
    // Or the token was expired
    err => {
        if(err.response.status === 401){
            logout()
        }
        return Promise.reject(err)
});

export default api