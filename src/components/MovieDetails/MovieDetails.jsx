import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { fetchMovieDetails } from '../../api';
import {
  DetailsContainer,
  Poster,
  Title,
  Score,
  Overview,
  Genres,
  Genre,
  MovieInfo,
  InfoTitle,
  AdditionalInformation,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  const year = release_date.substring(0, 4);
  const score = Math.ceil(vote_average * 10);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <DetailsContainer>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <MovieInfo>
          <Title>
            {title} ({year})
          </Title>
          <Score>User Score: {score}%</Score>
          <InfoTitle>Overview</InfoTitle>
          <Overview>{overview}</Overview>
          <InfoTitle>Genres</InfoTitle>
          <Genres>
            {genres.map(genre => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
          </Genres>
        </MovieInfo>
      </DetailsContainer>
      <AdditionalInformation>
        <p>Additional information</p>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </AdditionalInformation>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
