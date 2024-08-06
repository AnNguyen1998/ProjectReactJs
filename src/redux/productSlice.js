import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    products:[],
    status:'start',
    error:null
}
const url = 'https://api.escuelajs.co/api/v1/products'
export const fetchProducts = createAsyncThunk("products/fetchGames", async ()=>{
    const response = await axios.get(url)
    return response.data
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = productSlice.actions
export default productSlice.reducer