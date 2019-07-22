import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

import * as api from "../../lib/api";

export const GET_POST = "post/GET_POST";

export const getPost = createAction(GET_POST, api.getPost);

const initialState = {
  object: {}
};

export default handleActions(
  {
    ...pender({
      type: GET_POST,
      onSuccess: (state, action) => {
        return {
          object: action.payload.data
        };
      }
    })
  },
  initialState
);
