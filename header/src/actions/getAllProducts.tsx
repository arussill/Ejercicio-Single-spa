import { createAsyncThunk } from "@reduxjs/toolkit";
import { inventoryProductType } from '../features/ProductSlice'

const getAllProductsUrl = 'https://raulhwstore.herokuapp.com/api/v1/products/'

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await fetch(getAllProductsUrl)
    return (await response.json() as inventoryProductType[])
})