import React, { Component } from "react";

class Movie extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <>
        <h1>Movie form - {this.props.match.params.id}</h1>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={this.handleSave}
        >
          Save
        </button>
      </>
    );
  }
}

export default Movie;
