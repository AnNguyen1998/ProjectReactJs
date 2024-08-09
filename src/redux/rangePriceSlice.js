import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    rangeProducts:[],
    status:'start',
    error:null
}
const url = 'https://api.escuelajs.co/api/v1/products/?price_min='
export const fetchRange = createAsyncThunk("rangeProducts/fetchRange", async (min, max)=>{
    console(min + max + "aaa")
    const response = await axios.get(url + min + '&price_max=' + max)
    return response.data
})

const rangePriceSlice = createSlice({
    name: 'rangeProducts',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchRange.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchRange.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.rangeProducts = action.payload
            console.log(action.payload)
        })
        .addCase(fetchRange.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = rangePriceSlice.actions
export default rangePriceSlice.reducer