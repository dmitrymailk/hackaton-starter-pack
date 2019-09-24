import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Favorite extends Component {
  render() {
    let { title, color, id } = this.props;
    let style = {
      background: color
    };
    return (
      <div className="favorite-item favorite-item_color" style={style}>
        <Link to={`/schedule/${id}`}>
          <div className="favorite-item__title">{title}</div>
        </Link>
      </div>
    );
  }
}
