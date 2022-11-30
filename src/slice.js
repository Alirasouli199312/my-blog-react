import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading } = mainSlice.actions;

export default mainSlice.reducer;
