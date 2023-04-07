import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userStore",
  initialState: {
    isLoggedInStatus: false,
    loggedInUser: {},
  },
  reducers: {
    setLoggedInUser: (state, action) => {
      console.log("In setLoggedInUser. payload: ", action.payload);
      state.loggedInUser = action.payload;
    },
    setLoggedInStatus: (state, action) => {
      console.log("isLoggedInStatus has been set to: ", action.payload);
      state.isLoggedInStatus = action.payload;
    },
  },
});

export const {
  setLoggedInUser,
  setLoggedInStatus,
  setMeasurements,
  setAvailableTags,
} = userSlice.actions;

export default userSlice.reducer;
