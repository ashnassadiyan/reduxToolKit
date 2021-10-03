
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Exchanges {
    description: string
    iconUrl: string
    id: number
    lastTickerCreatedAt: number
    marketShare: number
    name: string
    numberOfMarkets: number
    rank: number
    uuid: string
    verified: boolean
    volume: number
    websiteUrl?: string
}
interface ExchangesState {
    exchanges: Exchanges[]
}

const initialState: ExchangesState = {
    exchanges: []
}

export const ExchangesSlice = createSlice({
    name: "exchanges",
    initialState,
    reducers: {
        create: (state, actions: PayloadAction<Exchanges[]>) => {
            state.exchanges = actions.payload
        }
    }
})


export default ExchangesSlice.reducer
export const { create } = ExchangesSlice.actions