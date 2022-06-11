import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import s from './cast.module.scss';
export default function Cast() {
  const [cast, setCast] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setCast(prevState => ({ ...prevState, loading: true }));
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=551128ca2d4756d2fb16af330a08b773&language=en-US`
        );

        setCast(prevState => ({
          ...prevState,
          items: data.cast,
          loading: false,
        }));
      } catch (error) {
        setCast(prevState => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchCast();
  }, [id]);

  const elements = cast.items.map(e => (
    <li key={e.id}>
      <img
        className={s.img}
        src={
          e?.profile_path
            ? 'https://image.tmdb.org/t/p/w500' + e?.profile_path
            : null
        }
        alt=""
      />
      <br />
      <span>{e.name}</span>
      <br />
      <span>
        Character: {e.character}: {}
      </span>
    </li>
  ));

  return (
    <div>
      {cast.loading && <p>...loading</p>}
      {cast.items?.length ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        !cast.loading && (
          <span>We don't have information about cast in this film </span>
        )
      )}
    </div>
  );
}
