import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types/Types";

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  pass: "",
  recados: [],
};

const UserLogadoSlice = createSlice({
  name: "userLogado",
  initialState,
  reducers: {
    setUserLogado(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { setUserLogado, clear } = UserLogadoSlice.actions;
export default UserLogadoSlice.reducer;
