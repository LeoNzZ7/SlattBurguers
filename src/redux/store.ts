import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./reducers/loggedReducer";

export const store = configureStore({
    reducer: {
        logged: loggedReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;