import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'logged',
    initialState: {
        type: 'login'
    },
    reducers: {
        setFormType: (state, action) => {
            state.type = action.payload;
        }
    }
});

export const { setFormType } = slice.actions;
export default slice.reducer;