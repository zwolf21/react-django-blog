import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import Header from "../../components/common/Header";
import * as baseActions from "../../store/modules/base";

class HeaderContainer extends Component {
  handleRemove = () => {
    const { BaseActions } = this.props;
    BaseActions.showModal("remove");
  };

  render() {
    return (
      <Header id={this.props.match.params.id} onRemove={this.handleRemove} />
    );
  }
}

const conn = connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
);

export default withRouter(conn(HeaderContainer));
