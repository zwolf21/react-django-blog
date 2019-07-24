import React, { Component } from "react";

import classNames from "classnames";

import styles from "./AskRemoveModal.scss";
import ModalWrapper from "../ModalWrapper";
import Button from "../../Button";

const cx = classNames.bind(styles);

class AskRemoveModal extends Component {
  render() {
    const { visible, onConfirm, onCancel } = this.props;
    return (
      <ModalWrapper visible={visible}>
        <div className={cx("question")}>
          <div className={cx("title")}>삭제</div>
          <div className={cx("description")}>정말로 삭제하시겠습니까?</div>
        </div>
        <div className={cx("options")}>
          <Button theme="gray" onClick={onCancel}>
            취소
          </Button>
          <Button onClick={onConfirm}>삭제</Button>
        </div>
      </ModalWrapper>
    );
  }
}

export default AskRemoveModal;
