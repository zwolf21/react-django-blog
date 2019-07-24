import { createAction, handleActions } from "redux-actions";

export const SHOW_MODAL = "base/SHOW_MODAL";
export const HIDE_MODAL = "base/HIDE_MODAL";

export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

const initialState = {
  modal: {
    remove: false,
    login: false
  }
};

export default handleActions(
  {
    [SHOW_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return {
        modal: {
          ...state.modal,
          [modalName]: true
        }
      };
    },
    [HIDE_MODAL]: (state, action) => {
      const { payload: modalName } = action;
      return {
        modal: {
          ...state.modal,
          [modalName]: false
        }
      };
    }
  },
  initialState
);
