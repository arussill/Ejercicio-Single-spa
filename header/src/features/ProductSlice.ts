import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/getAllProducts";
import { RootState } from "../app/store";
import { posibleStatus } from "./posibleStatus";

type inventoryProductType = {
    id: string,
    name: string,
    description: string,
    stock: number,
    price: number,
    providerId: string,
    minimumAmount: number,
    maximumAmount: number,
}

type editInventoryProductType = {
    id: string,
    name: string,
    description: string,
    stock: number,
    price: number,
    providerId: string,
    minimumAmount: number,
    maximumAmount: number,
}

type cartProductType = {
    id: string,
    name: string,
    description: string,
    stock: number,
    price: number,
}

interface initialStateInventoryProductType {
    products: inventoryProductType[],
    cartProducts: cartProductType[],
    editProduct: editInventoryProductType,
    status: posibleStatus,
    error: string | null
}

const initialState: initialStateInventoryProductType = {
    products: [],
    cartProducts: [],
    editProduct: {
        id: "",
        name: "",
        description: "",
        stock: 0,
        price: 0,
        providerId: "",
        minimumAmount: 0,
        maximumAmount: 0,},
    status: posibleStatus.IDLE,
    error: null,
}

const inventoryProductSlice = createSlice({
    name: "inventoryProduct",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        //GET
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.products = []
        })
    }
})


export type { inventoryProductType }
export type { editInventoryProductType }
export type { cartProductType }
export type { initialStateInventoryProductType }
export default inventoryProductSlice.reducer

export const selectInventoryProductsState = () => (state: RootState) => state.inventoryProduct.products
export const selectInventoryProductsStatus = () => (state: RootState) => state.inventoryProduct.status
export const selectInventoryProductsFetchError = () => (state: RootState) => state.inventoryProduct.error
