import { handleActions } from "redux-actions";

export const aaa = handleActions(
  {
    ADD(state, action) {
      return state + parseInt(action.payload.text);
    },
    DEL(state, action) {
      return state - parseInt(action.payload.text);
    }
  },
  10
);
