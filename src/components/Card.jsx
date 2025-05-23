import React from "react";
import "./card.css";

const Card = ({ movie }) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
      <div className="movie-card">
        <img src={movie.previewImg} alt="Preview" className="img-fluid" />
        <p>
          {movie.title}
        </p>
        <div className="content">
          <h4>{movie.length} | {movie.category}</h4>
          <div className="card-icons">
            <ion-icon name="add-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
