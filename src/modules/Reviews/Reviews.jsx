import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Reviews() {
  const [reviews, setReviews] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setReviews(prevState => ({ ...prevState, loading: true }));
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=551128ca2d4756d2fb16af330a08b773&language=en-US&page=1`
        );
        setReviews(prevState => ({
          ...prevState,
          items: data.results,
          loading: false,
        }));
      } catch (error) {
        setReviews(prevState => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchCast();
  }, [id]);
  const elements = reviews.items.map(e => (
    <li key={e.id}>
      <p>{e.content}</p>
    </li>
  ));
  return (
    <div>
      {reviews.loading && <p>...loading</p>}
      {reviews.items?.length ? (
        <ul>{elements}</ul>
      ) : (
        !reviews.loading && (
          <span>We don't have any reviews for this movie</span>
        )
      )}
    </div>
  );
}
