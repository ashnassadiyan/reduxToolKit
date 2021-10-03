
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserFeatureI {
    values: string[]
}

const initialState: UserFeatureI = {
    values: []
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<string>) => {
            state.values.push(action.payload)
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.values.filter((s, i) => s !== action.payload)
        },
        removeAll: (state) => {
            state.values = []
        }
    }
})

export default userSlice.reducer

export const { addUser, removeUser, removeAll } = userSlice.actions

