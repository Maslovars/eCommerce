import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserSlice {
  email: string;
  password: string;
  name: string;
  isLoggedIn: boolean;
}

const initialState: UserSlice = {
  email: '',
  password: '',
  name: '',
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    emailFill: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    passwordFill: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    nameFill: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { emailFill, passwordFill, nameFill } = userSlice.actions;

export default userSlice.reducer;
