import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const initialState={
    games:[],
    status:'start',
    error:null
}

const url = "https://api.rawg.io/api/games?key=9afd9dc5ec3a458984ce4db1d781e160&page_size=50"

export const fetchGames = createAsyncThunk("products/fetchGames", async ()=>{
    const response = await axios.get(url)
    return response.data.results
})

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGames.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchGames.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.games = action.payload
        })
        .addCase(fetchGames.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = productSlice.actions
export default productSlice.reducer