import React from "react";

import { Link } from "react-router-dom";
import classNames from "classnames";
import { format } from "path";

import moment from "moment";
import removeMd from "remove-markdown";

import styles from "./PostItem.scss";

const cx = classNames.bind(styles);

const PostItem = ({ title, body, publishedDate, tags, id }) => {
  const tagList = tags.map(tag => (
    <Link key={tag} to={`/tag/${tag}`}>
      #{tag}
    </Link>
  ));
  return (
    <div className={cx("post-item")}>
      <h2>
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      <div className={cx("date")}>{moment(publishedDate).format("ll")}</div>
      <p>{removeMd(body)}</p>
      <div className={cx("tags")}>{tagList}</div>
    </div>
  );
};

export default PostItem;
