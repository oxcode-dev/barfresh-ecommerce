import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/productsReducer";
import { createWrapper } from "next-redux-wrapper";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    productsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);


// export const persistor = persistStore(store)