import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieDetails from './MovieDetails';

const App = () => {
  // ... your existing code ...

  return (
    <Router>
      <div>
        <h1>My Movie App</h1>
        <Routes>
          <Route
            path="/" element={<Filter filter={filter} setFilter={setFilter} />}
          />
          <Route
            path="/" element={<MovieList movies={filteredMovies} />}
          />
          <Route
            path="/movies/:title" element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
