import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

import * as api from "../../lib/api";

const INITIALIZE = "editor/INITIALIZE";
const CHANGE_INPUT = "editor/CHANGE_INPUT";
const CREATE_POST = "editor/CREATE_POST";

export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const createPost = createAction(CREATE_POST, api.createPost);

const initialState = {
  id: null,
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
    },
    ...pender({
      type: CREATE_POST,
      onSuccess: (state, action) => {
        const { id } = action.payload.data;
        return {
          ...state,
          id: id
        };
      }
    })
  },
  initialState
);
