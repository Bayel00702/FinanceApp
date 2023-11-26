import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllBTC = createAsyncThunk(
    "BTC/getAllBTC",
    async (_,thunkAPI) => {
        try {
            const res = await axios(`ws://127.0.0.1:8000/ws/bitcoin/`);
            return res.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const getAllBTCSlice = createSlice({
    name: "getAllBTC",
    initialState: {
        data: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBTC.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllBTC.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getAllBTC.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export const {} = getAllBTCSlice.actions;

export default getAllBTCSlice.reducer