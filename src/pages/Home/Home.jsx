import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const data = await getTrendingMovies();
      setMovies(data.results);
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
