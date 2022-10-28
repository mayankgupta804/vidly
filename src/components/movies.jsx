import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

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
      sortColumn,
      onSort,
    } = this.props;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

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
                sortColumn={sortColumn}
                onDelete={onDelete}
                onLike={onLike}
                onSort={onSort}
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
