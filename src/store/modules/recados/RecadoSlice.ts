import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const RecadoSlice = createSlice({
  name: 'Recado',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = RecadoSlice.actions;
export default RecadoSlice.reducer;
