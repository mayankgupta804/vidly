import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  render() {
    const { length: count } = this.props.movies;
    const { pageSize, currentPage, onPageChange, onLike, movies, onDelete } = this.props;
    
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Movies;
