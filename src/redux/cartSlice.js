import { createSlice } from "@reduxjs/toolkit";

let initialState = {}

if(localStorage.getItem('cart')){
    initialState = {
        carts: JSON.parse(localStorage.getItem('cart')),
        num: localStorage.getItem('numcart')
    }
}else{
    initialState={
        carts:[],
        num: 0
    }
}
const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers:{
        addCart(state, action){
            state.carts.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.carts))
        },
        countNum(state){
            state.num = state.carts.length
            localStorage.setItem('numcart', state.carts.length)
        },
        delItemCart(state, action){
            state.carts = state.carts.filter(item=> item.id != action.payload)
            localStorage.setItem('cart', JSON.stringify(state.carts.filter(item=> item.id != action.payload)))
        }
    },
})

export const {addCart, countNum, delItemCart} = cartSlice.actions
export default cartSlice.reducer