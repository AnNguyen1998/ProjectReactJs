import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    productDetail: {
        title: '',
        price: 0,
        description: '',
        images: []
    },
    status:'start',
    error:null
}
const url = 'https://api.escuelajs.co/api/v1/products'

export const fetchDetail = createAsyncThunk('productdetail/fetchDetail', async (id)=>{
    console.log(id)
    const response = await axios.get(url + '/' + id)
    return response.data
})

const productDetailSlice = createSlice({
    name: 'productdetail',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchDetail.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchDetail.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.productDetail = action.payload
        })
        .addCase(fetchDetail.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = productDetailSlice.actions
export default productDetailSlice.reducer