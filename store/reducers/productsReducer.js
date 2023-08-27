import { categories, productData } from "../../data/products"

const initialState = {
    products: productData,
    categories: categories,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state
    }
}