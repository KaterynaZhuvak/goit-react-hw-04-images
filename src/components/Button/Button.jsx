import React, { useState } from 'react';
import css from './Button.module.css';

export const Button = ({ onClick }) => {
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage(prevState => prevState + 1);
    onClick(page);
  };

  return (
    <button onClick={addPage} className={css.loadMore}>
      Load more
    </button>
  );
};
