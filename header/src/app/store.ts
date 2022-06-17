import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import inventoryProductReducer from "../features/ProductSlice"

const store = configureStore({
    reducer: {
        inventoryProduct: inventoryProductReducer,
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()