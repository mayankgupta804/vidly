import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import { paginate } from "../utils/paginate";

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

    const filtered = selectedGenre && selectedGenre._id
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
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          liked={movie.liked}
                          onClick={() => onLike(movie)}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => onDelete(movie)}
                          type="button"
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
