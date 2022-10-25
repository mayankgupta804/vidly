import "./App.css";
import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Movies from "./components/movies";

class App extends Component {
  state = {
    movies: getMovies(),
    allMovies: getMovies(),
    genres: [...new Set(getMovies().map((movie) => movie.genre.name))],
    currentPage: 1,
    pageSize: 4,
    currentGenre: "All Genres",
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (genre) => {
    if (genre === "All Genres") {
      this.setState({
        movies: this.state.allMovies,
        currentGenre: "All Genres",
      });
      return;
    }
    const moviesInGenre = this.state.allMovies.filter(
      (m) => m.genre.name === genre
    );
    this.setState({ movies: moviesInGenre, currentGenre: genre });
  };

  render() {
    return (
      <main className="container">
        <Movies
          movies={this.state.movies}
          genres={this.state.genres}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
          onGenreChange={this.handleGenreChange}
          currentGenre={this.state.currentGenre}
        />
      </main>
    );
  }
}

export default App;
