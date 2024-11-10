import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      if (state.user.length === 0 && payload.length === 0) {
        return;
      }
      state.user = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { setUser } = actions;
export default reducer;
