import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
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
    setUserLogado(state: User, action) {
      return action.payload;
    },
    clearUserLogado() {
      return initialState;
    },
    addRecadoInUserLogado(state: User, action) {
      state.recados.push(action.payload);
      return;
    },
    removeRecadoInUserLogado(state: User, action) {
      let indexRecado = state.recados.findIndex(
        (recado) => (recado.id = action.payload)
      );
      state.recados.splice(indexRecado, 1);
      return;
    },
  },
});

export const {
  setUserLogado,
  clearUserLogado,
  addRecadoInUserLogado,
  removeRecadoInUserLogado,
} = UserLogadoSlice.actions;
export default UserLogadoSlice.reducer;
// export const selectUserLogado = (state: RootState): User => state.userLogado;
