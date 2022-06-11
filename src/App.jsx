import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './index.css';
import Menu from 'modules/Menu';
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const Cast = lazy(() => import('./modules/Cast'));
const Reviews = lazy(() => import('./modules/Reviews'));
export function App() {
  return (
    <div className="App">
      <Menu />
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}
