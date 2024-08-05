import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "./Reducers/LanguageSlice";


const Store = configureStore({
  reducer: {
    langSlice: LanguageSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
