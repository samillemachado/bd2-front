import { createSlice } from "@reduxjs/toolkit";
import { FiltroRecado } from "../../../types/Types";

const initialState: FiltroRecado = {
  filtro: "",
  campo: "",
  statusRecado: "",
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    create(state, action) {
      return console.log(action.payload);
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = FilterSlice.actions;
export default FilterSlice.reducer;
