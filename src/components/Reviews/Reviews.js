import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  } else if (reviews.length === 0) {
    return <div>We don't have any reviews for this movie</div>;
  }

  return (
    <section>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h2>{review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
