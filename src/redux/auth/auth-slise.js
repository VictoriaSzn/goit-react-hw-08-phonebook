import { createSlice } from "@reduxjs/toolkit";
import authOperations from './auth-operations';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
     extraReducers: builder =>
         builder
             .addCase(authOperations.register.pending, (state, action) => state)
             .addCase(authOperations.register.fulfilled, (state, action) => {
                 state.user = action.payload.user;
                 state.token = action.payload.token;
                 state.isLoggedIn = true;
              })
            .addCase(authOperations.register.rejected, (state, action) => state)
             .addCase(authOperations.logIn.fulfilled, (state, action) => {
                 state.user = action.payload.user;
                 state.token = action.payload.token;
                 state.isLoggedIn = true;
             })
            .addCase(authOperations.logOut.fulfilled, state  => {
                 state.user = { name: null, email: null};
                 state.token = null;
                 state.isLoggedIn = false;
            })
            .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
                 state.user = action.payload;
                 state.isLoggedIn = true;
             }),
});
export const authReducer = authSlice.reducer;