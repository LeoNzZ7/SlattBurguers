import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./reducers/loggedReducer";
import formTypeReducer from "./reducers/formTypeReducer";

export const store = configureStore({
    reducer: {
        logged: loggedReducer,
        type: formTypeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;