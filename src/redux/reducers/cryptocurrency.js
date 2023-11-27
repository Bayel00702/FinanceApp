import {createSlice} from "@reduxjs/toolkit";

export const cryptocurrencySlice = createSlice({
    name: "cryptocurrency",
    initialState: {},
    reducers: {
        cryptocurrency: (state, action) => {
            state.cryptocurrency = action.payload.cryptocurrency
        }
    }
});

export const {cryptocurrency} = cryptocurrencySlice.actions
export default cryptocurrencySlice.reducer