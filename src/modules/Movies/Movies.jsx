import MoviesItem from './MoviesItem';
import PropTypes from 'prop-types';
import s from './movies.module.scss';
export default function Movies({ data }) {
  return (
    <ul className={s.list}>
      {data.map(e => (
        <MoviesItem data={e} key={e.id} />
      ))}
    </ul>
  );
}
Movies.defaultProps = {
  data: [],
};
Movies.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
