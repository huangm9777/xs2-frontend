
import { Navigate } from "react-router-dom";
import { getToken } from "@/util";



// const { getToken } = require("@/util");



export function AuthRoute({ children }) {
    const token = getToken()
    if(!token) {
        return <Navigate to={'/login'} replace/>
    }else{
        return <>{children}</>
    }
}