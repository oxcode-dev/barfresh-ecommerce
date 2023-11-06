import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
    },

    reducers: {
        fetchProducts: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { fetchProducts } = ProductsSlice.actions
export const getProducts = (state) => state.products.value

export default ProductsSlice.reducer