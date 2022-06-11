import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Movies from 'modules/Movies';
import Searchbar from 'modules/Searchbar';
import axios from 'axios';

export default function MoviesPage() {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [key, setKey] = useSearchParams();
  const query = key.get('query');
  useEffect(() => {
    const fetchMovies = async () => {
      setMovies(prevState => ({ ...prevState, loading: true }));
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=551128ca2d4756d2fb16af330a08b773&language=en-US&query=${query}&page=1&include_adult=false`
        );
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          items: data.results,
        }));
      } catch (error) {
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    if (query) {
      fetchMovies();
    }
  }, [query]);

  const onSubmit = query => {
    setKey({ query });
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {movies.loading && <p>...loading</p>}
      {movies.items?.length > 0 && <Movies data={movies.items} />}
    </>
  );
}
