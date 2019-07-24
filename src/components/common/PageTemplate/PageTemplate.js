import React from "react";

import classNames from "classnames";

import styles from "./PageTemplate.scss";
import HeaderContainer from "../../../containers/common/HeaderContainer";
import Footer from "../Footer";

const cx = classNames.bind(styles);

const PostTemplate = ({ children }) => {
  return (
    <div className={cx("page-template")}>
      <HeaderContainer />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PostTemplate;
