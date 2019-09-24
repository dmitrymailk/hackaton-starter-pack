import React, { Component } from "react";
import { Link } from "@reach/router";

export default class AnotherProducts extends Component {
  startLesson = (e, target, link) => {
    if (target) {
      window.open(link);
      e.preventDefault();
    }
    e.stopPropagation();
  };

  render() {
    let { title, backColor, textColor } = this.props;
    let style = {
      background: backColor,
      color: textColor
    };

    return (
      <Link
        to=""
        target="_blank"
        onClick={e =>
          this.startLesson(
            e,
            true,
            "https://test-new-lectorium.firebaseapp.com/"
          )
        }
      >
        <div className="another-products another-products_color" style={style}>
          <div className="another-products__title">{title}</div>
        </div>
      </Link>
    );
  }
}
