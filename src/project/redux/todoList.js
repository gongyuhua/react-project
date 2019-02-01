import { handleActions } from "redux-actions";

export const hanAc = handleActions(
  {
    ADD(state, action) {
      return state + 1;
    },
    DEL(state, action) {
      return state - 1;
    }
  },
  100
);
