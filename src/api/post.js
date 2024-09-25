
import { request } from "@/util";

//user related request 

// login request

export function getChannelAPI(){
    return request({

        url:"/channels",
        method:"GET",       

    })
}

// submit post form
export function submitPostAPI(data){
    return request({
        url:"/media/submit",
        method:"POST",
        data
    })
}