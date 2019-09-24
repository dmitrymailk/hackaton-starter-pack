import React, { Component } from "react";

export default class SectionTitle extends Component {
 
  render() {
    let { title } = this.props;

    return <span className="section-title">{title}</span>;
  }
}
