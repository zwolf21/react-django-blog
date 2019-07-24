import { createAction, handleActions } from "redux-actions";

import { pender } from "redux-pender";

import * as api from "../../lib/api";

export const INITIALIZE = "editor/INITIALIZE";
export const CHANGE_INPUT = "editor/CHANGE_INPUT";
export const CREATE_POST = "editor/CREATE_POST";
export const GET_POST = "editor/GET_POST";
export const EDIT_POST = "editor/EDIT_POST";

export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const createPost = createAction(CREATE_POST, api.createPost);
export const getPost = createAction(GET_POST, api.getPost);
export const editPost = createAction(EDIT_POST, api.editPost);

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
        const { id, title, body, tags } = action.payload.data;
        return {
          id,
          title,
          tags,
          markdown: body
        };
      }
    }),
    ...pender({
      type: GET_POST,
      onSuccess: (state, action) => {
        const { id, title, body, tags } = action.payload.data;
        return {
          id,
          title,
          tags,
          markdown: body
        };
      }
    }),
    ...pender({
      type: EDIT_POST,
      onSuccess: (state, action) => {
        const { id, title, body, tags } = action.payload.data;
        return {
          id,
          title,
          tags,
          markdown: body
        };
      }
    })
  },
  initialState
);
