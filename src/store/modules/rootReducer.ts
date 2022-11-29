import { combineReducers } from "@reduxjs/toolkit";
import recados from "./recados/RecadosSlice";
import badge from "./componentes/BadgeSlice";
import filter from "./componentes/FilterSlice";
import users from "./users/UsersSlice";
import userLogado from "./users/UserLogado";

export default combineReducers({
  recados,
  users,
  userLogado,
  badge,
  filter,
});
