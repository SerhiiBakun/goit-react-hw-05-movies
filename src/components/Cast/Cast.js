import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => {
      setCredits(data.cast);
    });
  }, [movieId]);

  if (!credits) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <ul>
        {credits.map(credit => (
          <li key={credit.id}>
            <img
              src={`https://image.tmdb.org/t/p/w185${credit.profile_path}`}
              alt={credit.name}
            ></img>
            <p>{credit.name}</p>
            <p>Character: {credit.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
