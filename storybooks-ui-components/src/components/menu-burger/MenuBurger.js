import React, { Component } from "react";

export default class MenuBurger extends Component {
  constructor(){
    super()
    this.state = {
      animate: false
    }
  }
  animate = () => {
    console.log("Animate");
    this.setState({
      animate: !this.state.animate
    })
  }
  render() {
    let { animate } = this.state;
    return (
      <div className={`menu-burger ${animate?"menu-burger_open":"menu-burger_close"}`}>
        <div className={`menu-burger__switch ${animate?"menu-burger__switch_animate": ""}`} onClick={this.animate}>
          <div className="container">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="menu-burger__list">
          <div className="menu-burger__list-item">настройки</div>
          <div className="menu-burger__list-item">о приложении</div>
          <div className="menu-burger__list-item">войти</div>
        </div>
      </div>
    );
  }
}
