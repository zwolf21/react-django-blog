import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PostInfo from "../../components/post/PostInfo";
import PostBody from "../../components/post/PostBody";
import * as postActions from "../../store/modules/post";

class Post extends Component {
  initialize = async () => {
    const { PostActions, id } = this.props;
    try {
      await PostActions.getPost(id);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { loading, post } = this.props;
    const { title, body, publishedDate, tags } = post;

    return (
      <div>
        <PostInfo title={title} publishedDate={publishedDate} tags={tags} />
        <PostBody body={body} />
      </div>
    );
  }
}

const conn = connect(
  state => ({
    post: state.post.object,
    loading: state.pender.pending[postActions.GET_POST]
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
);

export default conn(Post);
