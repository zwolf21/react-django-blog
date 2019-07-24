import React, { Component } from "react";

import classNames from "classnames";

import styles from "./ModalWrapper.scss";

const cx = classNames.bind(styles);

class ModalWrapper extends Component {
  state = {
    animate: false
  };

  startAnimation = () => {
    this.setState({
      animate: true
    });
    setTimeout(() => {
      this.setState({
        animate: false
      });
    }, 250);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible) {
      this.startAnimation();
    }
  }

  render() {
    const { children, visible } = this.props;
    const { animate } = this.state;
    if (!visible && !animate) {
      return null;
    }

    const animation = animate && (visible ? "enter" : "leave");

    return (
      <div>
        <div className={cx("gray-background", animation)}>
          <div className={cx("modal-wrapper")}>
            <div className={cx("modal", animation)}>{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalWrapper;
