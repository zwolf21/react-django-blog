import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Footer.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <Link to="/" className={cx("brand")}>
        ReactDjangoBlog
      </Link>
      <div className={cx("admin-login")}>관리자 로그인</div>
    </footer>
  );
};

export default Footer;
