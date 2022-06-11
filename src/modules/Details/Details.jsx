import s from './details.module.scss';
import PropTypes from 'prop-types';
export default function Details({ movie }) {
  const getPoster = () =>
    movie?.poster_path
      ? 'https://image.tmdb.org/t/p/w500' + movie?.poster_path
      : null;
  return (
    <>
      <div className={s.container}>
        <img
          className={s.img}
          src={getPoster()}
          alt={`${movie.title} poster`}
        />
        <div className={s.info}>
          <h2>{movie.title}</h2>
          <span>User Score: {movie.vote_average * 10}% </span>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <span>{movie.genres?.map(e => e.name).join(', ')}</span>
        </div>
      </div>
    </>
  );
}
Details.defaultProps = {
  movie: [],
};
Details.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
