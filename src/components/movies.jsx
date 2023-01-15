import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import { withRouter } from "react-router-dom";
import _ from "lodash";

class Movies extends Component {
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.props;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

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

    const { totalCount, data: movies } = this.getPagedData(
      selectedGenre,
      allMovies,
      sortColumn,
      currentPage,
      pageSize
    );

    const routeChange = () => {
      const path = "/movies/new";
      this.props.history.push(path);
    };

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
          <button
            onClick={routeChange}
            type="button"
            className="btn btn-primary"
          >
            New Movie
          </button>
          {count === 0 ? (
            <p>There are no movies in the database.</p>
          ) : (
            <>
              <p>Showing {totalCount} movies in the database.</p>
              <MoviesTable
                movies={movies}
                sortColumn={sortColumn}
                onDelete={onDelete}
                onLike={onLike}
                onSort={onSort}
              />
              <Pagination
                itemsCount={totalCount}
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

export default withRouter(Movies);
