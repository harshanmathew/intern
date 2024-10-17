import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

interface GlobalStatesTypes {
  isLogin: boolean;
  count: number;
}

const initialState: GlobalStatesTypes = {
  isLogin: false,
  count: 0,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setLogin, setCount } = globalSlice.actions;
export default globalSlice.reducer;
