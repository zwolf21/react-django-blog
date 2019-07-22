import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

const INITIALIZE = "editor/INITIALIZE";
const CHANGE_INPUT = "editor/CHANGE_INPUT";

export const initialze = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

const initialState = {
  title: "",
  markdown: "",
  tags: ""
};

export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    }
  },
  initialState
);
