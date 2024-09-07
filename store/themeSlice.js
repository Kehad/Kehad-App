import { createSlice } from "@reduxjs/toolkit";



const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light", // Default to system theme or 'light'
  },
  reducers: {
    setLightMode: (state) => {
      state.theme = "light";
    },
    setDarkMode: (state) => {
      state.theme = "dark";
    },
  },
});

export const { setLightMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
