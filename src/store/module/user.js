//user state management
import{createSlice}from '@reduxjs/toolkit'
import { request } from '@/util'
import {setToken as _setToken, removeToken, getToken} from '@/util'
import {loginAPI ,getUserInfoAPI} from '@/api/user'

const userSlice=createSlice({
    name:'user',
    initialState:{
        token: getToken() || '',
        userInfo: {}
    },
    reducers:{
        
        setToken(state,action){
            state.token=action.payload
            _setToken(action.payload)

        },
        setUserInfo(state,action){
            state.userInfo=action.payload
        },
        clearUserInfo(state){
            state.userInfo={}
            state.token=''
            removeToken()
        }
    }
})
// use login 
const fetchLogin = (loginForm)=>{
    return async(dispatch)=>{
        //call api
        // const res = await request.post('/user/login',loginForm)
        const res = await loginAPI(loginForm)
        // setToken(res.data.token)
        dispatch(setToken(res.data.data.token))
        
    }
}
// retrieve user info 
const fetchUserInfo = ()=>{
    return async(dispatch)=>{
        // const res = await request.get('/user/profile')
        const res = await getUserInfoAPI()
        dispatch(setUserInfo(res.data.data))
        
    }
}


const {setToken, setUserInfo, clearUserInfo} = userSlice.actions
const userReducer = userSlice.reducer

export { fetchLogin, fetchUserInfo, clearUserInfo} 
export default userReducer

