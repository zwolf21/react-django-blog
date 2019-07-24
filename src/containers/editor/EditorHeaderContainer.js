import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import EditorHeader from "../../components/editor/EditorHeader";
import * as editorActions from "../../store/modules/editor";

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions, location } = this.props;
    EditorActions.initialize();

    const { id } = queryString.parse(location.search);
    if (id) {
      EditorActions.getPost(id);
    }
  }

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleSubmit = async () => {
    const {
      title,
      markdown,
      tags,
      EditorActions,
      history,
      location
    } = this.props;
    const post = {
      title,
      body: markdown,
      tags
    };

    const { id } = queryString.parse(location.search);
    try {
      if (id) {
        await EditorActions.editPost({ id, ...post });
      } else {
        await EditorActions.createPost(post);
      }
      history.push(`/post/${this.props.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { id } = queryString.parse(this.props.location.search);

    return (
      <EditorHeader
        onGoBack={this.handleGoBack}
        onSubmit={this.handleSubmit}
        isEdit={id ? true : false}
      />
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
