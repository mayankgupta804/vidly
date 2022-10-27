import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  render() {
    const { length: count } = this.props.movies;
    const {
      pageSize,
      currentPage,
      onPageChange,
      onLike,
      onDelete,
      onGenreSelect,
      movies: allMovies,
      genres,
      selectedGenre,
    } = this.props;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={onGenreSelect}
          />
        </div>
        <div className="col">
          {count === 0 ? (
            <p>There are no movies in the database.</p>
          ) : (
            <>
              <p>Showing {filtered.length} movies in the database.</p>
              <MoviesTable
                movies={movies}
                onDelete={onDelete}
                onLike={onLike}
              />
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={onPageChange}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Movies;
