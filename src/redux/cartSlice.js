import { createSlice } from "@reduxjs/toolkit";

let initialState = {}

if(localStorage.getItem('cart') && localStorage.getItem('logged')){
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
            const { id } = action.payload
            const index = state.carts.findIndex(function(item){return item.id === id})
            if (index < 0){
                // state.carts.push({...action.payload, quantity: 1})
                state.carts = [...state.carts, {...action.payload, quantity: 1} ]
                console.log(state.carts)
            } else{
                state.carts[index].quantity ++
            }
            if(localStorage.getItem('logged')){
                localStorage.setItem('cart',JSON.stringify(state.carts))
            }
        },
        countNum(state){
            state.num = state.carts.length
            if(localStorage.getItem('logged')){
            localStorage.setItem('numcart', state.carts.length)
            }
        },
        delItemCart(state, action){
            state.carts = state.carts.filter(item=> item.id !== action.payload)
            if(localStorage.getItem('logged')){
            localStorage.setItem('cart', JSON.stringify(state.carts.filter(item=> item.id !== action.payload)))
            }
        },
        quantityUp(state, action){
            state.carts = state.carts.map((item)=>item.id===action.payload?{...item,quantity: item.quantity+=1}:item)
            if(localStorage.getItem('logged')){
            localStorage.setItem('cart', JSON.stringify(state.carts))
            }
        },
        quantityDown(state, action){
            state.carts = state.carts.map((item)=>item.id===action.payload?{...item,quantity: item.quantity-=1}:item)
            if(localStorage.getItem('logged')){
            localStorage.setItem('cart', JSON.stringify(state.carts))
            }
        }
    },
})

export const {addCart, countNum, delItemCart, quantityUp, quantityDown} = cartSlice.actions
export default cartSlice.reducer