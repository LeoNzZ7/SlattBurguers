import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'logged',
    initialState: {
        status: false
    },
    reducers: {
        setLoggedStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const { setLoggedStatus } = slice.actions;
export default slice.reducer;