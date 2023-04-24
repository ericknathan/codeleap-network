import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  username: string;
}

const initialState: AuthState = {
  username: localStorage.getItem("username") || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    signOut: (state) => {
      state.username = "";
      localStorage.removeItem("username");
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
