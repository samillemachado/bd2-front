import { combineReducers } from "@reduxjs/toolkit";
import recados from "./recados/recados";
import recado from "./recados/recado";

export default combineReducers({
  recados,
  recado,
});
