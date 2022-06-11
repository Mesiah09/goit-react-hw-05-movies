import { Link, useLocation } from 'react-router-dom';
import s from './movies-item.module.scss';
export default function MoviesItem({ data }) {
  const location = useLocation();
  return (
    <li className={s.item}>
      <Link state={{ from: location }} to={`/movies/${data.id}`}>
        {data.title}
      </Link>
    </li>
  );
}
