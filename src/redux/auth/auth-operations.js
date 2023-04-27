import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk('auth/regster', async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/signup', credentials);
        //token.set(data.token);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) { 
       return thunkAPI.rejectWithValue(error.message);
    }
});
const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const res = await axios.post('/users/login', credentials);
        //token.set(data.token);
        setAuthHeader(res.data.token);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
     }
});
const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
    try {
       await axios.post('/users/logout');
       clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
     }
});
const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
       // const state = thunkAPI.getState();
        //const persistedToken = state.auth.token;
        const { token } = thunkAPI.getState().auth;
        //if (persistedToken === null) {
        if (!token) {
            return thunkAPI.rejectWithValue('No walid token');
        }
       //setAuthHeader(persistedToken);
        
        try {
            setAuthHeader(token);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
           return thunkAPI.rejectWithValue(error.message); 
        }
    },
);
const authOperations = {
    register,
    logIn,
    logOut,
    refreshUser,
}
export default authOperations;