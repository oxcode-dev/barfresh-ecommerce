import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import productsReducer from './slices/ProductsSlice'
import FaqsReducer from './slices/FaqsSlice'
import ReviewsReducer from './slices/ReviewsSlice'
import CategoriesReducer from "./slices/CategoriesSlice";
import CartReducer from "./slices/CartSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  products: productsReducer,
  faqs: FaqsReducer,
  reviews: ReviewsReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export const persistor = persistStore(store)