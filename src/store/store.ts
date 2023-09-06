import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>; // Define RootState here

export default store;
