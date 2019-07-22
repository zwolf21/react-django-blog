import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import EditorHeader from "../../components/editor/EditorHeader";
import * as editorActions from "../../store/modules/editor";

class EditorHeaderContainer extends Component {
  componentDidMount() {
    this.props.EditorActions.initialize();
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleSubmit = async () => {
    const { title, markdown, tags, EditorActions, history } = this.props;
    const post = {
      title,
      body: markdown,
      tags
    };
    try {
      await EditorActions.createPost(post);
      history.push(`/post/${this.props.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <EditorHeader onGoBack={this.handleGoBack} onSubmit={this.handleSubmit} />
    );
  }
}

const conn = connect(
  state => ({
    ...state.editor
  }),
  dispatch => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
);

export default conn(withRouter(EditorHeaderContainer));
