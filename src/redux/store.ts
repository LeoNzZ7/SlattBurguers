import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./reducers/loggedReducer";
import formTypeReducer from "./reducers/formTypeReducer";
import newItemCartReducer from "./reducers/newItemCartReducer";

export const store = configureStore({
    reducer: {
        logged: loggedReducer,
        type: formTypeReducer,
        NewItemCart: newItemCartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;