//store.jsx
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../redux/menuSlice.jsx";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
