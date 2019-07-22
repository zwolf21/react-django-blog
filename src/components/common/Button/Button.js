import React from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./Button.scss";

const cx = classNames.bind(styles);

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

const Button = ({ children, to, onClick, disabled, theme = "default" }) => {
  const Element = to && !disabled ? Link : Div;
  return (
    <Element
      className={cx("button", theme, { disabled })}
      to={to}
      onClick={disabled ? () => null : onClick}
    >
      {children}
    </Element>
  );
};

export default Button;
