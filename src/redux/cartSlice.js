import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[],
    num: 0
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers:{
        addCart(state, action){
            state.carts = [...state.carts, action.payload]
        },
        countNum(state){
            state.num = state.carts.length
        }
    },
})

export const {addCart} = cartSlice.actions
export default cartSlice.reducer