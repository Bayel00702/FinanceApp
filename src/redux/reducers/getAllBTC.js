import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCrypto = createAsyncThunk(
    "crypto/getAllCrypto",
    async (_, thunkAPI) => {
        try{
            const ws = new window.WebSocket("ws://127.0.0.1:8000/ws/bitcoin/");
            ws.onmessage = (event) => {
              JSON.parse(event.data);
            };
        } catch (err){
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const getAllCryptoSlice = createSlice({
    name: "getAllCrypto",
    initialState: {
        data: [],
        isLoading: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCrypto.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCrypto.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(getAllCrypto.rejected, (state, { payload }) => {
                state.error = payload;
                state.isLoading = false;
            });
    },
});

export const {} = getAllCryptoSlice.actions;

export default getAllCryptoSlice.reducer;