import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'NewItemCart',
    initialState: {
        id: 0,
        name:  '',
        price: 0,
        img: ''
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setImg: (state, action) => {
            state.img = action.payload;
        },
    }
});

export const { setId, setName, setPrice, setImg } = slice.actions;
export default slice.reducer;