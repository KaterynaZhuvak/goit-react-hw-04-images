import { useState } from 'react';

import css from './Searchbar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget.elements.input.value;
    onSubmit(input);
  };

  return (
    <header className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="input"
          onChange={handleChange}
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchButton}>
          <span className={css.buttonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};
