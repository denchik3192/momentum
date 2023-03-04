import { createSlice } from "@reduxjs/toolkit";

const backgroundSlise = createSlice({
  name: "background",
  initialState: {
    backgroungNumber: "00",
  },
  reducers: {
    changeBG(state, action) {
      state.backgroungNumber = action.payload;
    },
  },
});

export const { changeBG } = backgroundSlise.actions;

export default backgroundSlise.reducer;
