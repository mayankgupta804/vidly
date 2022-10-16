import React, { Component } from "react";

class Like extends Component {
  state = {
    className: "fa fa-heart-o",
  };

  handleClick = () => {
    this.setState({ className: this.getHeartClasses() });
  };

  render() {
    return (
      <span onClick={this.handleClick}>
        <i className={this.state.className} aria-hidden="true"></i>
      </span>
    );
  }

  getHeartClasses() {
    let classes = "fa "
    classes += this.state.className === "fa fa-heart-o"
      ? " fa-heart"
      : " fa-heart-o";
      return classes;
  }
}

export default Like;
