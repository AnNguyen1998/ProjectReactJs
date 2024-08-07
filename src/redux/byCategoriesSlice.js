import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    byCategories:[],
    status:'start',
    error:null
}
const url = 'https://api.escuelajs.co/api/v1/products/?categoryId='
export const fetchByCategory = createAsyncThunk("byCategories/fetchByCategories", async (id)=>{
    const response = await axios.get(url + id)
    return response.data
})

const byCategorySlice = createSlice({
    name: 'byCategories',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchByCategory.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchByCategory.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            console.log(action.payload)
            // state.byCategories.push(action.payload)
        })
        .addCase(fetchByCategory.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = byCategorySlice.actions
export default byCategorySlice.reducer