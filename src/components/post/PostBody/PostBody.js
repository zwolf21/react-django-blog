import React from "react";

import classNames from "classnames";

import styles from "./PostBody.scss";
import MarkdownRender from "../../common/MarkdownRender";

const cx = classNames.bind(styles);

const PostBody = ({ body }) => {
  return (
    <div className={cx("post-body")}>
      <div className={cx("paper")}>
        <MarkdownRender markdown={body} />
      </div>
    </div>
  );
};

export default PostBody;
