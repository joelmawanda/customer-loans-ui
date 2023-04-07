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
        console.log('Let us reset our isLoggedInStatus');
        state.isLoggedInStatus = action.payload;
      },
  },
});

export const { setLoggedInUser, setLoggedInStatus } = userSlice.actions;

export default userSlice.reducer;
