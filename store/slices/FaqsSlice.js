import { createSlice } from "@reduxjs/toolkit";

export const FaqsSlice = createSlice({
    name: 'faqs',
    initialState: {
        value: [],
    },

    reducers: {
        fetchFaqs: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { fetchFaqs } = FaqsSlice.actions
export const getFaqs = (state) => state.faqs.value

export default FaqsSlice.reducer