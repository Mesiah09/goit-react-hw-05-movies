import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Details from 'modules/Details';
import Button from 'modules/Button';
import s from './movie-details-page.module.scss';
export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({
    data: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setMovie(prevState => ({ ...prevState, loading: true }));
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=551128ca2d4756d2fb16af330a08b773&language=en-US`
        );
        setMovie(prevState => ({ ...prevState, loading: false, data }));
      } catch (error) {
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchMovie();
  }, [id]);
  const location = useLocation();
  return (
    <div className={s.container}>
      <Button />
      {movie.loading && <p>...loading</p>}

      {movie.data?.title && <Details movie={movie.data} />}
      <span className={s.link}>
        <Link className={s.link} state={location.state} to="cast">
          Cast
        </Link>
      </span>
      <span className={s.link}>
        <Link className={s.link} state={location.state} to="reviews">
          Reviews
        </Link>
      </span>
      <Outlet />
    </div>
  );
}
