import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CryptoCurrencies {
    id: number
    uuid: string
    slug: string
    symbol: string
    name: string
    description: string
    color: string
    iconType: string
    iconUrl: string
    websiteUrl: string
    socials: any[]
    links: any[]
    confirmedSupply: boolean
    numberOfMarkets: number
    numberOfExchanges: number
    type: string
    volume: number
    marketCap: number
    price: number
    circulatingSupply: number
    totalSupply: number
    approvedSupply: boolean
    firstSeen: number
    listedAt: number
    change: number
    rank: number
    history: any[]
    allTimeHigh: any[]
    penalty: boolean
}

interface CryptoCurrenciesI {
    data: CryptoCurrencies[]
}

const initialState: CryptoCurrenciesI = {
    data: []
}

export const cryptoCurrenciesSlice = createSlice({
    name: "cryptocurrencies",
    initialState,
    reducers: {
        addCurrencies: (state, action: PayloadAction<CryptoCurrenciesI>) => {
            state.data = action.payload.data
        }
    }
})

export default cryptoCurrenciesSlice.reducer
export const { addCurrencies } = cryptoCurrenciesSlice.actions
