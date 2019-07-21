import React from "react";

import classNames from "classnames";

import styles from "./PageTemplate.scss";

const cx = classNames.bind(styles);

const PageTemplate = () => {
  return <div className={cx("page-template")}>PageTemplate</div>;
};

export default PageTemplate;
