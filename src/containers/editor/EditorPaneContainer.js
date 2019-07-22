import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import EditorPane from "../../components/editor/EditorPane";
import * as editorActions from "../../store/modules/editor";

class EditorPaneContainer extends Component {
  handleChangeInput = ({ name, value }) => {
    const { EditorActions } = this.props;
    EditorActions.changeInput({ name, value });
  };

  render() {
    const { title, tags, markdown } = this.props;
    const { handleChangeInput } = this;
    return (
      <EditorPane
        title={title}
        markdown={markdown}
        tags={tags}
        onChangeInput={handleChangeInput}
      />
    );
  }
}

const mapStateToProps = state => state.editor;

const mapDispatchToProps = dispatch => ({
  EditorActions: bindActionCreators(editorActions, dispatch)
});

const conn = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default conn(EditorPaneContainer);
