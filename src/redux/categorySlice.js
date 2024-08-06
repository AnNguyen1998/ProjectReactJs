import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    categories:[],
    status:'start',
    error:null
}
const url = 'https://api.escuelajs.co/api/v1/categories?offset=0&limit=6'
export const fetchCategory = createAsyncThunk("categories/fetchCategories", async ()=>{
    const response = await axios.get(url)
    return response.data
})

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategory.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchCategory.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.categories = action.payload
        })
        .addCase(fetchCategory.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = categorySlice.actions
export default categorySlice.reducer