import { combineReducers } from "@reduxjs/toolkit";
import recados from "./recados/RecadosSlice";
import recado from "./recados/RecadoSlice";

export default combineReducers({
  recado,
  recados,
});
