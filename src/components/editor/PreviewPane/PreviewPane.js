import React from "react";

import classNames from "classnames";

import styles from "./PreviewPane.scss";
import MarkdownRender from "../../common/MarkdownRender";

const cx = classNames.bind(styles);

const PreviewPane = ({ markdown, title }) => {
  return (
    <div className={cx("preview-pane")}>
      <h1 className={cx("title")}>{title}</h1>
      <div>
        <MarkdownRender markdown={markdown} />
      </div>
    </div>
  );
};

export default PreviewPane;
