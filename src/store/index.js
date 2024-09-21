import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./module/counterStore";
import channelReducer from "./module/channelStore";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer
    }
})


export default store