import { createSlice } from "@reduxjs/toolkit";

export const ReviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        value: [],
    },

    reducers: {
        fetchReviews: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { fetchReviews } = ReviewsSlice.actions
export const selectReviews = (state) => state.reviews.value

export default ReviewsSlice.reducer