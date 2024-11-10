import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tracks: [],
};
const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTracks: (state, { payload }) => {
      if (state.tracks.length === 0 && payload.length === 0) {
        return;
      }
      state.tracks = payload;
    },
  },
});

const { reducer, actions } = trackSlice;

export const { setTracks } = actions;
export default reducer;
