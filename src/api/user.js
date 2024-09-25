
import { request } from "@/util";

//user related request 

// login request

export function loginAPI(loginForm){
    return request({

        url:"/user/login",
        method:"POST",
        data:loginForm
        

    }).catch(err=>{
        console.log(err);
    })
}

// retrieve user info

export function getUserInfoAPI(){
    return request({
        url:"/user/profile",
        method:"GET"
    }).catch(err=>{
        console.log(err);
    })
}