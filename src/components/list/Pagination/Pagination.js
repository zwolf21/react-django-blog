import React from "react";

import classNames from "classnames";

import styles from "./Pagination.scss";
import Button from "../../common/Button";

const cx = classNames.bind(styles);

const Pagination = () => {
  return (
    <div className={cx("pagination")}>
      <Button disabled>이전페이지</Button>
      <div className={cx("number")}>페이지 1</div>
      <Button>다음 페이지</Button>
    </div>
  );
};

export default Pagination;
