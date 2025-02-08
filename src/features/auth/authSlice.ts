import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  username: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.username = '';
      state.email = '';
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
