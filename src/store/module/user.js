//user state management
import{createSlice}from '@reduxjs/toolkit'
import { request } from '@/util'
import {setToken as _setToken, removeToken, getToken} from '@/util'


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
        }
    }
})
// use login 
const fetchLogin = (loginForm)=>{
    return async(dispatch)=>{
        //call api
        const res = await request.post('/user/login',loginForm)
        // setToken(res.data.token)
        dispatch(setToken(res.data.data.token))
        
    }
}
// retrieve user info 
const fetchUserInfo = ()=>{
    return async(dispatch)=>{
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data.data))
        
    }
}


const {setToken, setUserInfo} = userSlice.actions
const userReducer = userSlice.reducer

export { fetchLogin, fetchUserInfo} 
export default userReducer

