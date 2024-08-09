import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface GlobalStatesTypes {
  isLogin: boolean;
}

const initialState: GlobalStatesTypes = {
  isLogin: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin } = globalSlice.actions;
export default globalSlice.reducer;
