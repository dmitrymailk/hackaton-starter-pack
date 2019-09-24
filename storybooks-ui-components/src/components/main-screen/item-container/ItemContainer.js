import React, { Component } from "react";
import SectionTitle from "../../section-title/SectionTitle";
import ListItem from "./__list-item/ListItem";
export default class ItemContainer extends Component {
  render() {
    let { title, components } = this.props;
    return (
      <React.Fragment>
        <div className="item-container">
          <SectionTitle title={title} />
          <ListItem components={components} />
        </div>
      </React.Fragment>
    );
  }
}
