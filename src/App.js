import "./App.css";
import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const menuItems = [
      { name: "Movies", path: "/movies" },
      { name: "Rentals", path: "/rentals" },
      { name: "Customers", path: "/customers" },
    ];
    return (
      <main className="container">
        <Navbar menuItems={menuItems} />
        <div className="content">
          <Switch>
            <Redirect from="/movies" to="/" />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route
              exact
              path="/"
              render={(props) => (
                <Movies
                  movies={this.state.movies}
                  genres={this.state.genres}
                  onLike={this.handleLike}
                  onDelete={this.handleDelete}
                  pageSize={this.state.pageSize}
                  onPageChange={this.handlePageChange}
                  currentPage={this.state.currentPage}
                  onGenreSelect={this.handleGenreChange}
                  selectedGenre={this.state.selectedGenre}
                  onSort={this.handleSort}
                  sortColumn={this.state.sortColumn}
                  {...props}
                />
              )}
            />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
