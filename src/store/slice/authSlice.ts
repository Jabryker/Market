import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  rememberMe: boolean;
}

const initialState: IAuthState = {
  rememberMe: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRememberMe: (state, action: PayloadAction<boolean>) => {
      state.rememberMe = action.payload;
    },
  },
});

export const { setRememberMe } = authSlice.actions;

export default authSlice.reducer;
