import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  username: string;
}

const initialState: AuthState = {
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    signOut: (state) => {
      state.username = "";
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
