import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Feature/UserFeature'
import exchangesReducer from './Feature/ExchangesFeature'
import globalStatsReducer from './Feature/GlabalStats'
import cryptoCurrencyReducer from './Feature/CryptoCurrencies'
import NewsReducer from './Feature/NewsFeature'
import TablesReducer from './Feature/TablesFeature'
import ProductsReducer from './Feature/ProductsFeature'



export const store = configureStore({
    reducer: {
        Users: userReducer,
        Exchanges: exchangesReducer,
        GlobalStatus: globalStatsReducer,
        CryptoCurrencies: cryptoCurrencyReducer,
        News: NewsReducer,
        Tables: TablesReducer,
        Products: ProductsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
