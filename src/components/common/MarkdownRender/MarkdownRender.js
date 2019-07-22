import React, { Component } from "react";

import classNames from "classnames";
import marked from "marked";
import Prism from "prismjs";

import "prismjs/themes/prism-okaidia.css";

import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-css.min.js";
import "prismjs/components/prism-python.min.js";

import styles from "./MarkdownRender.scss";

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
  state = {
    html: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.markdown !== this.props.markdown) {
      this.rednerMarkdown();
    }

    if (prevState.html !== this.state.html) {
      Prism.highlightAll();
    }
  }

  rednerMarkdown = () => {
    const { markdown } = this.props;
    if (!markdown) {
      this.setState({ html: "" });
      return;
    }
    this.setState({
      html: marked(markdown, {
        break: true
        // sanitize: true
      })
    });
  };

  render() {
    const { html } = this.state;
    const markup = {
      __html: html
    };
    console.log("markdown:", markup);
    return (
      <div className={cx("markdown-render")} dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;
