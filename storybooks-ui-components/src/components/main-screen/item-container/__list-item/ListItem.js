import React, { Component } from "react";

export default class ListItem extends Component {
  
  render() {
    let { components } = this.props;
    return (
      <div className="item-container__list-item">
        {components.map((item, i) => {
          let { Component } = item;
          return <Component {...item} key={i} />;
        })}
      </div>
    );
  }
}
