import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: '',
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { selectMail } =
  emailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export default emailSlice.reducer;