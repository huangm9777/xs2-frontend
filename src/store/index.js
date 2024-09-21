import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./module/counterStore";
import channelReducer from "./module/channelStore";
import userReducer from "./module/user";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer,
        user: userReducer
    }
})


export default store