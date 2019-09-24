import React, { Component } from "react";

export default class HomeworkItem extends Component {
  
  render() {
    let { title, color } = this.props;
    let style = {
      background: color
    };
    return (
      <div className="homework-item homework-item_color" style={style}>
        <span className="homework-item__title">{title}</span>
      </div>
    );
  }
}
