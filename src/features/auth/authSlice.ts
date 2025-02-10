import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  username: '',
  email: '',
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.username = '';
      state.email = '';
      state.accessToken = '';
      state.refreshToken = '';
      state.isAuthenticated = false;
    },
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { loginUser, logoutUser, setTokens } = authSlice.actions;

export const authReducer = authSlice.reducer;
