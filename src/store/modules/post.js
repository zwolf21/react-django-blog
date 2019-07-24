import { createAction, handleActions } from "redux-actions";

import { pender } from "redux-pender";

import * as api from "../../lib/api";

export const GET_POST = "post/GET_POST";
export const DELETE_POST = "post/DELETE_POST";

export const getPost = createAction(GET_POST, api.getPost);
export const deletePost = createAction(DELETE_POST, api.deletePost);

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
    }),
    ...pender({
      type: DELETE_POST,
      onSuccess: (state, action) => initialState
    })
  },
  initialState
);
