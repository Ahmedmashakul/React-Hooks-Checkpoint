// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.title}`} style={{ textDecoration: 'none' }}>
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
