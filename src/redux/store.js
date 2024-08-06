import {configureStore} from '@reduxjs/toolkit'
import productSlice from './productSlice'
import productDetailSlice from './productDetailSlice'
import categorySlice from './categorySlice'
import searchTitleSlice from './searchTitleSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        products: productSlice,
        productdetail: productDetailSlice,
        categories: categorySlice,
        productSearch: searchTitleSlice,
        carts: cartSlice
    }
})
export default store