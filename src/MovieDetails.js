// MovieDetails.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ match, movies }) => {
  const movie = movies.find((m) => m.title === match.params.title);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <iframe
        title="movie-trailer"
        width="560"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default MovieDetails;
