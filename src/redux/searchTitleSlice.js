import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    productSearch:[],
    status:'start',
    error:null,
    name:''
}
const url = 'https://api.escuelajs.co/api/v1/products'
export const fetchSearchProducts = createAsyncThunk("productSearch/fetchSearchProducts", async (title)=>{
    console.log(title)
    const response = await axios.get(url + '/?title=' + title)
    return response.data
})

const searchTitleSlice = createSlice({
    name: 'productSearch',
    initialState,
    reducers:{
        addName(state, action){
            state.name = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSearchProducts.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchSearchProducts.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.productSearch = action.payload
        })
        .addCase(fetchSearchProducts.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {addName} = searchTitleSlice.actions
export default searchTitleSlice.reducer