import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import * as baseActions from "../../../../store/modules/base";
import * as postActions from "../../../../store/modules/post";
import AskRemoveModal from "./AskRemoveModal";

class AskRemoveModalContainer extends Component {
  handleConfirm = async () => {
    const { BaseActions, PostActions, history, match } = this.props;
    const { id } = match.params;
    try {
      await PostActions.deletePost(id);
      BaseActions.hideModal("remove");
      history.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal("remove");
  };

  render() {
    const { visible } = this.props;
    const { handleCancel, handleConfirm } = this;
    return (
      <AskRemoveModal
        visible={visible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    );
  }
}

const conn = connect(
  state => ({
    visible: state.base.modal.remove
  }),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
);

export default conn(withRouter(AskRemoveModalContainer));
