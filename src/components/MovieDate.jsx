import React from "react";
import "./movieDate.css";

const MovieDate = ({ movie }) => {
  return (
    <div className={`date ${movie.active ? "active" : undefined}`}>
      <h2>On {movie.date}</h2>
    </div>
  );
};

export default MovieDate;
