
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductI } from "./ProductsFeature";

export interface TablesI {
    status: boolean;
    tableName: string;
    tableId: number;
    activeTime: number;
    products?: ProductI[]
}

export interface OrderI extends ProductI {
    index: number
}

interface TablesArray {
    tables: TablesI[]
}

interface TimeChange {
    index: number;
    time: string
}

const initialState: TablesArray = {
    tables: [
        {
            status: false,
            tableId: 1,
            tableName: "Table 1",
            activeTime: 0
        },
        {
            status: false,
            tableId: 2,
            tableName: "Table 2",
            activeTime: 0
        },
        {
            status: false,
            tableId: 3,
            tableName: "Table 3",
            activeTime: 0
        }, {
            status: false,
            tableId: 4,
            tableName: "Table 4",
            activeTime: 0
        }, {
            status: false,
            tableId: 5,
            tableName: "Table 5",
            activeTime: 0
        }, {
            status: false,
            tableId: 6,
            tableName: "Table 6",
            activeTime: 0
        },
    ]
}


export const TablesSlice = createSlice({
    name: "tables",
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<number>) => {
            state.tables[action.payload].status = true

        },
        setTime: (state, action: PayloadAction<number>) => {
            setInterval(() => {
                console.log(state.tables[1])
                // state.tables[action.payload].activeTime = state.tables[action.payload].activeTime + 1
            }, 1000)

        },
        addOrder: (state, action: PayloadAction<OrderI>) => {
            state.tables[action.payload.index].products?.push(action.payload)
        },
        getTable: (state, action: PayloadAction<number>) => {

        }
    }
})

export const { setActive, setTime } = TablesSlice.actions
export default TablesSlice.reducer

