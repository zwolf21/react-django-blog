import { createAction, handleActions } from "redux-actions";

import { Map } from "immutable";
import { pender } from "redux-pender";

import * as api from "../../lib/api";

export const GET_POST_LIST = "list/GET_POST_LIST";

export const getPostList = createAction(
  GET_POST_LIST,
  api.getPostList,
  meta => meta
);

const initialState = {
  object_list: [],
  lastPage: null
};

export default handleActions(
  {
    ...pender({
      type: GET_POST_LIST,
      onSuccess: (state, action) => {
        const { results, pageNumber } = action.payload.data;
        return {
          object_list: results,
          lastPage: parseInt(pageNumber, 10)
        };
      }
    })
  },
  initialState
);
