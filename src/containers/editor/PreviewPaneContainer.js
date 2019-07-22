import React, { Component } from "react";
import { connect } from "react-redux";

import PreviewPane from "../../components/editor/PreviewPane";

class PreviewPaneContainer extends Component {
  render() {
    const { markdown, title } = this.props;
    return <PreviewPane title={title} markdown={markdown} />;
  }
}

const conn = connect(state => state.editor);

export default conn(PreviewPaneContainer);
