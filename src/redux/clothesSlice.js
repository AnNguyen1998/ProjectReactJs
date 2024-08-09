import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    clothes:[],
    electro:[],
    hola:[],
    shoe:[],
    mis:[],
    status:'start',
    error:null
}
const url = 'https://api.escuelajs.co/api/v1/products/?categoryId=1'
const url1 = 'https://api.escuelajs.co/api/v1/products/?categoryId=2'
const url2 = 'https://api.escuelajs.co/api/v1/products/?categoryId=3'
const url3 = 'https://api.escuelajs.co/api/v1/products/?categoryId=4'
const url4 = 'https://api.escuelajs.co/api/v1/products/?categoryId=5'
export const fetchClothes = createAsyncThunk("clothes/fetchClothes", async ()=>{
    const response = await axios.get(url)
    return response.data
})
export const fetchElec = createAsyncThunk("clothes/fetchElec", async ()=>{
    const response = await axios.get(url1)
    return response.data
})
export const fetchHola = createAsyncThunk("clothes/fetchHola", async ()=>{
    const response = await axios.get(url2)
    return response.data
})
export const fetchShoe = createAsyncThunk("clothes/fetchShoe", async ()=>{
    const response = await axios.get(url3)
    return response.data
})
export const fetchMis = createAsyncThunk("clothes/fetchMis", async ()=>{
    const response = await axios.get(url4)
    return response.data
})

const clothesSlice = createSlice({
    name: 'clothes',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchClothes.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchClothes.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.clothes = action.payload
        })
        .addCase(fetchClothes.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchElec.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchElec.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.electro = action.payload
        })
        .addCase(fetchElec.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchHola.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchHola.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.hola = action.payload
        })
        .addCase(fetchHola.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchShoe.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchShoe.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.shoe = action.payload
        })
        .addCase(fetchShoe.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(fetchMis.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(fetchMis.fulfilled,(state, action)=>{
            state.status = 'succeeded'
            state.mis = action.payload
        })
        .addCase(fetchMis.rejected,(state, action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const {} = clothesSlice.actions
export default clothesSlice.reducer