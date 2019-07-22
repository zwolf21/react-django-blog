import React from "react";

import classNames from "classnames";

import styles from "./EditorHeader.scss";
import Button from "../../common/Button";

const cx = classNames.bind(styles);

const EditorHeader = ({ onGoBack, onSubmit }) => {
  return (
    <div className={cx("editor-header")}>
      <div className={cx("back")}>
        <Button onClick={onGoBack} theme="outline">
          뒤로가기
        </Button>
      </div>
      <div className={cx("submit")}>
        <Button onClick={onSubmit} theme="outline">
          작성하기
        </Button>
      </div>
    </div>
  );
};

export default EditorHeader;
