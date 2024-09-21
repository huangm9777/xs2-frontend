//user state management
import{createSlice}from '@reduxjs/toolkit'
import { request } from '@/util'


const userSlice=createSlice({
    name:'user',
    initialState:{
        token: localStorage.getItem('token_key') || '',
    },
    reducers:{
        
        setToken(state,action){
            state.token=action.payload
            localStorage.setItem('token_key',action.payload)

        },
        getToken (state){
            return state.token
        }
    }
})

const fetchLogin = (loginForm)=>{
    return async(dispatch)=>{
        //call api
        const res = await request.post('/user/login',loginForm)

        dispatch(setToken(res.data.token))


    }
}


const {setToken} = userSlice.actions
export {setToken, fetchLogin} 
const userReducer = userSlice.reducer

export default userReducer

