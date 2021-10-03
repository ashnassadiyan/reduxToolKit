import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalStats {

    data: {
        totalCoins: number
        totalMarkets: number
        totalExchanges: number
        totalMarketCap: number
        total24hVolume: number
    }
}

const initialState: GlobalStats = {
    data: {
        totalCoins: 0,
        totalMarkets: 0,
        totalExchanges: 0,
        totalMarketCap: 0,
        total24hVolume: 0,
    }
}

export const globalStatsSlice = createSlice({
    name: "gloabalstats",
    initialState,
    reducers: {
        addGlobalStats: (state, action: PayloadAction<GlobalStats>) => {
            state.data = action.payload.data
        }
    }

})

export default globalStatsSlice.reducer
export const { addGlobalStats } = globalStatsSlice.actions