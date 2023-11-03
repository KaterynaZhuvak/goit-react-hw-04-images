import css from './Searchbar.module.css';

export const SearchBar = ({ onSubmit }) => {
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
