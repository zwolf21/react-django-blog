import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PostList from "../../components/list/PostList";
import Pagination from "../../components/list/Pagination";
import * as listActions from "../../store/modules/list";

class ListContainer extends Component {
  getPostList = () => {
    const { tag, page, ListActions } = this.props;
    ListActions.getPostList({ page, tag });
  };

  componentDidMount() {
    this.getPostList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.page !== this.props.page ||
      prevProps.tag !== this.props.tag
    ) {
      this.getPostList();
      document.documentElement.scrollTop = 0;
    }
  }

  render() {
    const { loading, object_list, page, lastPage, tag } = this.props;
    if (loading) return null;
    return (
      <div>
        <PostList object_list={object_list} />
        <Pagination page={page} lastPage={lastPage} tag={tag} />
      </div>
    );
  }
}

const conn = connect(
  state => ({
    ...state.list,
    loading: state.pender.pending[listActions.GET_POST_LIST]
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
);

export default conn(ListContainer);
