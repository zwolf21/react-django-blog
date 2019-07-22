import React, { Component } from "react";

import classNames from "classnames";
import CodeMirror from "codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

import styles from "./EditorPane.scss";

const cx = classNames.bind(styles);

class EditorPane extends Component {
  editor = null;
  codeMirror = null;
  cursor = null;

  initializeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "markdown",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true
    });
    this.codeMirror.on("change", this.handleChangeMarkDown);
  };

  componentDidMount() {
    this.initializeEditor();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      const { codeMirror, cursor } = this;
      if (!codeMirror) {
        return;
      }
      codeMirror.setValue(this.props.markdown);
      if (!cursor) {
        return;
      }
      codeMirror.setCursor(cursor);
    }
  }

  handleChange = e => {
    this.props.onChangeInput(e.target);
  };

  handleChangeMarkDown = doc => {
    this.cursor = doc.getCursor();
    this.props.onChangeInput({
      name: "markdown",
      value: doc.getValue()
    });
  };

  render() {
    const { handleChange } = this;
    const { tags, title } = this.props;

    return (
      <div className={cx("editor-pane")}>
        <input
          className={cx("title")}
          placeholder="제목을 입력하세요"
          value={title}
          name="title"
          onChange={handleChange}
        />
        <div className={cx("code-editor")} ref={ref => (this.editor = ref)} />
        <div className={cx("tags")}>
          <div className={cx("description")}>태그</div>
          <input
            type="text"
            name="tags"
            placeholder="태그를 입력하세요 (쉼표로 구분)"
            value={tags}
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

export default EditorPane;
