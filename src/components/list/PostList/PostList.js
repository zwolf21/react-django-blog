import React from "react";

import classNames from "classnames";

import styles from "./PostList.scss";
import PostItem from "../PostItem";

const cx = classNames.bind(styles);

const PostList = ({ object_list }) => {
  const postList = object_list.map(object => {
    const { id, title, body, publishedDate, tags } = object;
    return (
      <PostItem
        title={title}
        body={body}
        publishedDate={publishedDate}
        tags={tags}
        key={id}
        id={id}
      />
    );
  });
  return <div className={cx("post-list")}>{postList}</div>;
};

export default PostList;
