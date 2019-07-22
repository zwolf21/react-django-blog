import React from "react";

import classNames from "classnames";

import styles from "./ListWrapper.scss";

const cx = classNames.bind(styles);

const ListWrapper = ({ children }) => {
  return <div className={cx("list-wrapper")}>{children}</div>;
};

export default ListWrapper;
