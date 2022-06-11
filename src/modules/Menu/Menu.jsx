import { NavLink, useLocation } from 'react-router-dom';
import s from './menu.module.scss';
import { items } from './items';
export default function Menu() {
  const location = useLocation();
  const getActiveLink = ({ isActive }) => (isActive ? s.linkActive : s.link);
  const elements = items.map(({ id, to, text }) => (
    <li className={s.item} key={id}>
      <NavLink className={getActiveLink} state={{ from: location }} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.menu}>{elements}</ul>;
}
