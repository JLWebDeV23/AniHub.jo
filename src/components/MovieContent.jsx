import React from "react";
import './movieContent.css'
import titleImg from '../images/demon_slayer_logo.png'
import Button from "./Button";

const MovieContent = ( { movie }) => {
  return (
    <div className={`content ${movie.active ? 'active' : undefined}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>
        {movie.description}
      </p>
      <Button 
        icon={<ion-icon name="play-outline"></ion-icon>} 
        name="Watch" 
        bgColor="#C691EC" 
        color="#ffffff"
      />

      <Button
        icon={<ion-icon name="add-outline"></ion-icon>} 
        name="My Favorite"
      />
    </div>
  );
};

export default MovieContent;
