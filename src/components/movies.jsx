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
      onGenreChange,
      movies: allMovies,
      genres,
      currentGenre,
    } = this.props;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ListGroup
              genres={genres}
              currentGenre={currentGenre}
              onGenreChange={onGenreChange}
            />
          </div>
          <div className="col-md-8">
            {count === 0 ? (
              <p>There are no movies in the database.</p>
            ) : (
              <>
                <p>Showing {count} movies in the database.</p>
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
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
