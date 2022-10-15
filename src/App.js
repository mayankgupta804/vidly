import "./App.css";
import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./components/movies";

class App extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <main className="container">
        <Movies movies={this.state.movies} onDelete={this.handleDelete}/>
      </main>
    );
  }
}

export default App;
