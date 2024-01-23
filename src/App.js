// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://example.com/inception.jpg',
      rating: 9.3,
    },
    // Add more initial movies as needed
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating >= parseFloat(filter.rating))
    );
  });

  return (
    <div>
      <h1>My Movie App</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      <div>
        <h2>Add a New Movie</h2>
        <button
          onClick={() =>
            addMovie({
              title: 'New Movie',
              description: 'Description of the new movie.',
              posterURL: 'https://example.com/new-movie.jpg',
              rating: 8.0,
            })
          }
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default App;
