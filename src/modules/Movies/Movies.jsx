import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import s from './movies.module.scss';
export default function Movies({ data }) {
  const location = useLocation();
  const elements = data.map(({ id, title }) => {
    return (
      <li key={id} className={s.item}>
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {title}
        </Link>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
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
