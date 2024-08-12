import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    rangeProducts:[],
    status:'start',
    error:null,
    min: 1,
    max: 50,
}
const url = 'https://api.escuelajs.co/api/v1/products/?price_min='
export const fetchRange = createAsyncThunk("rangeProducts/fetchRange", async (range)=>{
    const response = await axios.get(url + range.min + '&price_max=' + range.max)
    return response.data
})

const rangePriceSlice = createSlice({
    name: 'rangeProducts',
    initialState,
    reducers:{
        addMinMax(state, action){
            state.min = action.payload.min
            state.max = action.payload.max
        }
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

export const {addMinMax} = rangePriceSlice.actions
export default rangePriceSlice.reducer