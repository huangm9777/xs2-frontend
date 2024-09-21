//axios 
import axios from 'axios';
//root url

// timeout

const request = axios.create({
    baseURL: 'http://localhost:51802',
    timeout: 10000,
    // withCredentials: true
})
//interceptors
//intercept before a request is sent, customize configuration
request.interceptors.request.use((config)=> {
    return config
  }, (error)=> {
    return Promise.reject(error)
})

//response interceptor
request.interceptors.response.use((response)=> {
    return response
}, (error)=> {
    return Promise.reject(error)
})





export  {request};