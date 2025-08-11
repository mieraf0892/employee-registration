// src/redux/auth/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  userRole: "admin" | "developer" | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userRole: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userRole = action.payload.role;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userRole = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
