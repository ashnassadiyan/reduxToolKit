import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewsI {
    data: string[]
}

const initialState: NewsI = {
    data: []
}

export const NewsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        addNews: (state, action: PayloadAction) => {

        },
    }
})

export default NewsSlice.reducer
export const { addNews } = NewsSlice.actions
