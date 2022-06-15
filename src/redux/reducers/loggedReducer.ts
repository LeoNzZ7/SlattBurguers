import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'logged',
    initialState: {
        status: false,
        name: '',
        email: '',
        password: '',
    },
    reducers: {
        setLoggedStatus: (state, action) => {
            state.status = action.payload;
        },
        setLoggedFirstName: (state, action) => {
            state.name = action.payload;
        },
        setLoggedEmail: (state, action) => {
            state.email = action.payload;
        },
        setLoggedPassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const { setLoggedStatus } = slice.actions;
export default slice.reducer;