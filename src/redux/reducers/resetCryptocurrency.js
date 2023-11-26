import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    success: false,
    error: null,
};

const resBTCSlice = createSlice({
    name: 'resBTC',
    initialState,
    reducers: {},
});

export default resBTCSlice.reducer;