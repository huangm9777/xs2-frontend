import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({

    name: 'channel',
    initialState: {

        channels: []
    },
    reducers: {
        addChannel: (state, action) => {
            state.channels.push(action.payload)
        },
        setChannels: (state, action) => {
            state.channels = action.payload
        }
    }
})

const { addChannel, setChannels } = channelStore.actions

const fetchChannels =  () => {
    return async (dispatch) => {    
        const response = await axios.get('http://localhost:51802/media/listAll')
        console.log(response.data.data)
        dispatch(setChannels(response.data.data))
    }





}




// export const { addChannel } = channelStore.actions
export { fetchChannels }
export default channelStore.reducer 