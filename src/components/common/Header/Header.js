import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Header.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

const Header = ({ id, onRemove }) => {
  return (
    <header className={cx("header")}>
      <div className={cx("header-content")}>
        <div className={cx("brand")}>
          <Link to="/">React-Django Blog</Link>
        </div>
        <div className={cx("right")}>
          {id && [
            <Button key="edit" theme="outline" to={`/editor?id=${id}`}>
              수정
            </Button>,
            <Button key="remove" theme="outline" onClick={onRemove}>
              삭제
            </Button>
          ]}
          <Button theme="outline" to="/editor">
            새 포스트
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
