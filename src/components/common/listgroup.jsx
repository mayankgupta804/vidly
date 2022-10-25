import React from "react";

const ListGroup = (props) => {
  const { genres, onGenreChange } = props;

  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          className="list-group-item" 
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
