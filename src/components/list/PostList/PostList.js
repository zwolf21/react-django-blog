import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./PostList.scss";
import PostItem from "../PostItem";

const cx = classNames.bind(styles);

const PostList = () => {
  return (
    <div className={cx("post-list")}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
};

export default PostList;
