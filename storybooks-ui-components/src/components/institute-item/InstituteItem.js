import React, { Component } from "react";

export default class InstituteItem extends Component {
  
  render() {
    let { title, color } = this.props;
    let style = {
      background: color
    };
    return (
      <div className="institute-item institute-item_color" style={style}>
        <div className="institute-item__title">{title}</div>
      </div>
    );
  }
}
