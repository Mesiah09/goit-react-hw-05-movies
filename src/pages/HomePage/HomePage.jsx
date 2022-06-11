import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from 'modules/Movies';
export default function HomePage() {
  const [trending, setTrending] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setTrending(prevState => ({ ...prevState, loading: true }));
        const data = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=551128ca2d4756d2fb16af330a08b773'
        );

        setTrending(prevState => ({
          ...prevState,
          loading: false,
          items: data.data.results,
        }));
      } catch (error) {
        setTrending(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchTrending();
  }, [setTrending]);
  return (
    <div>
      <h2>Trending today</h2>
      {trending.loading && <p>...loading</p>}
      {trending.items?.length && <Movies data={trending.items} />}
    </div>
  );
}
