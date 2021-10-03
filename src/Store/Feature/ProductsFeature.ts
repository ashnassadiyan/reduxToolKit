import { createSlice } from "@reduxjs/toolkit";
export interface ProductI {
    id: number;
    name: string
}
export interface ProductsI {
    produts: ProductI[]
}

const initialState: ProductsI = {
    produts: [{
        id: 1,
        name: "coke"
    }, {
        id: 2,
        name: "Pepsi"
    }]
}

export const productSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {

    }
})

export default productSlice.reducer
export const { } = productSlice.actions
