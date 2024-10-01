import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light", // Default to system theme or 'light'
    manualOverride: false,
  },
  reducers: {
    setSystemTheme: (state, action) => {
      if (!state.manualOverride) {
        state.theme = action.payload;
      }
    },
    setLightMode: (state) => {
      state.theme = "light";
    },
    setDarkMode: (state) => {
      state.theme = "dark";
    },
    resetToSystemTheme: (state) => {
      state.manualOverride = false;
      // The actual theme will be set by setSystemTheme
    },
  },
});

export const { setSystemTheme, setLightMode, setDarkMode, resetToSystemTheme } =
  themeSlice.actions;
export default themeSlice.reducer;
