import React from "react";

import classNames from "classnames";

import styles from "./PostItem.scss";

const cx = classNames.bind(styles);

const PostItem = () => {
  return (
    <div className={cx("post-item")}>
      <h2>
        <a>타이틀</a>
      </h2>
      <div className={cx("date")}>2017-10-24</div>
      <p>내용</p>
      <div className={cx("tags")}>
        <a>#태그</a>
        <a>#태그</a>
        <a>#태그</a>
      </div>
    </div>
  );
};

export default PostItem;
