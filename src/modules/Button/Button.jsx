import { useLocation, useNavigate } from 'react-router-dom';
import s from './button.module.scss';
export default function Button() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || '/';
  const back = () => navigate(from);
  return (
    <button className={s.button} onClick={back}>
      Go back
    </button>
  );
}
