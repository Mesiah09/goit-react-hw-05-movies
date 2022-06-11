import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './searchbar.module.scss';

export default function Searchbar({ onSubmit }) {
  const [q, setQ] = useState('');

  const handleChange = ({ target }) => {
    setQ(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(q);
  };

  return (
    <form className={s.form} action="" onSubmit={handleSubmit}>
      <input
        className={s.input}
        value={q}
        name="query"
        onChange={handleChange}
        type="text"
      />
      <button className={s.button} type="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
