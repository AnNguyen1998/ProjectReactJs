import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const initialState={
    products:[],
    status:'start',
    error:null
}

const options = {
    method: 'POST',
    url: 'https://api.techspecs.io/v4/all/products/',
    params: {page: '0'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19RYkRGZVJzRjY4N3RsUiIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcyMjc2NDAzMX0.rq_uOk4Tx33QAVEMRs5az1tNEak2NO8NDVqhN-g0zlw',
      'content-type': 'application/json'
    },
    data: {category: ['Smartphones', 'Laptops'], from: '2022-01-30'}
  };
  
export const fetchProducts = createAsyncThunk("products/fetchGames", async ()=>{
    const response = await axios.request(options)
    return response.data.data.items
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
            state.games = action.payload
        })
        .addCase(fetchProducts.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = productSlice.actions
export default productSlice.reducer