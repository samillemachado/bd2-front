import { combineReducers } from "@reduxjs/toolkit";
import recados from "./recados/RecadosSlice";
import badge from "./componentes/BadgeSlice";
import filter from "./componentes/FilterSlice";

export default combineReducers({
  recados,
  badge,
  filter,
});
