import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./Api/ApiSlice";
export const store = configureStore({
  reducer: {
    apidata: ApiSlice,
  },
});