import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";
import moment from "moment";

import styles from "./PostInfo.scss";

const cx = classNames.bind(styles);

const PostInfo = ({ title, tags, publishedDate }) => {
  return (
    <div className={cx("post-info")}>
      <div className={cx("info")}>
        <h1>{title}</h1>
        <div className={cx("tags")}>
          {tags &&
            tags.map(tag => (
              <Link key={tag} to={`/tag/${tag}`}>
                #{tag}
              </Link>
            ))}
        </div>
        <div className={cx("date")}>{moment(publishedDate).format("ll")}</div>
      </div>
    </div>
  );
};

export default PostInfo;
