import React from "react";

const ListGroup = (props) => {
  const { genres, onGenreChange, currentGenre } = props;

  return (
    <ul className="list-group">
      <li
        className={
          currentGenre === "All Genres"
            ? "list-group-item active"
            : "list-group-item "
        }
        style={{ cursor: "pointer" }}
        onClick={() => onGenreChange("All Genres")}
      >
        All Genres
      </li>
      {genres.map((genre) => (
        <li
          className={
            currentGenre === genre
              ? "list-group-item active"
              : "list-group-item "
          }
          key={genre}
          style={{ cursor: "pointer" }}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
