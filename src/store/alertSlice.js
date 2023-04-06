import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alertStore',
    initialState: {
        open: false,
        timer: 'on',
        title: '',
        message: '',
    },
    reducers: {
        openAlert: (state, action) => {
            console.log('In OpenAlert');
            state.open = true;
            // timerFinished();
            // state.open != state.open;
        },
        closeAlert: (state, action) => {
            console.log('In closeAlert');
            state.open = false;
        },
        setAlertMessage: (state, action) => {
            console.log('In setAlertMessage action:', action.payload);
            state.message = action.payload;
        },
        setAlertTitle: (state, action) => {
            console.log('In setAlertTitle. action:', action.payload);
            state.title = action.payload;
        },
        // setAlertTimer: (state, action) => {
        // }
    },
});

export const { openAlert, closeAlert, setAlertMessage, setAlertTitle} = alertSlice.actions;

export default alertSlice.reducer;