import "./App.css";
import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./components/movies";

class App extends Component {
  state = {
    movies: getMovies(),
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = movies[index].liked ? false : true;
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <main className="container">
        <Movies
          movies={this.state.movies}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
        />
      </main>
    );
  }
}

export default App;
