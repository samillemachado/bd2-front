import { createSlice } from "@reduxjs/toolkit";
import { BadgeButton } from "../../../types/Types";

const initialState: BadgeButton = {
  isClicked: false,
  emblema: 0,
};

const BadgeSlice = createSlice({
  name: "badge",
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
    upBadgeActive(state) {
      return {
        isClicked: !state.isClicked,
        emblema: state.emblema,
      };
    },
    upBadgeNum(state, action) {
      return {
        isClicked: state.isClicked,
        emblema: action.payload,
      };
    },
  },
});

export const { create, clear, upBadgeActive, upBadgeNum } = BadgeSlice.actions;
export default BadgeSlice.reducer;
