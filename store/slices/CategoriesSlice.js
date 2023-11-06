import { createSlice } from "@reduxjs/toolkit";

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        value: [],
    },

    reducers: {
        fetchCategories: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { fetchCategories } = CategoriesSlice.actions
export const getCategories = (state) => state.categories.value

export default CategoriesSlice.reducer