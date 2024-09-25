//axios 
import axios from 'axios';
import { getToken, removeToken } from './token';
import {message} from 'antd';
import router from '@/router';
//root url

// timeout

const request = axios.create({
    baseURL: 'http://localhost:51802',
    timeout: 10000
    // withCredentials: true
})
//interceptors
//intercept before a request is sent, customize configuration
request.interceptors.request.use((config)=> {

    // inject token 
    // get token from local storage

    const token = getToken()
    // console.log(token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, (error)=> {
    return Promise.reject(error)
})

//response interceptor
request.interceptors.response.use((response)=> {
    return response
}, (error)=> {
    //monitor 401 token errer
    if (error.response.status === 401) {
        //redirect to login page
        // window.location.href = '/login'
        removeToken()
        message.error('Please login first')
        router.navigate('/login')
    }
    return Promise.reject(error)
})





export  {request};