import React from "react";

import classNames from "classnames";

import styles from "./PostInfo.scss";

const cx = classNames.bind(styles);

const PostInfo = () => {
  return (
    <div className={cx("post-info")}>
      <div className={cx("info")}>
        <h1>타이틀</h1>
        <div className={cx("tags")}>
          <a>#태그</a>
          <a>#태그</a>
          <a>#태그</a>
        </div>
        <div className={cx("date")}>Oct, 29, 2017</div>
      </div>
    </div>
  );
};

export default PostInfo;
