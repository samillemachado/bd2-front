import { combineReducers } from "@reduxjs/toolkit";
import recados from "./recados/RecadosSlice";
import badge from "./componentes/BadgeSlice";

export default combineReducers({
  recados,
  badge,
});
