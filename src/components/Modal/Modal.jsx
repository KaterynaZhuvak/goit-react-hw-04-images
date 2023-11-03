import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ closeModal, currentImg, alt }) => {
  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleOverlay}>
      <div className={css.modal}>
        <img className={css.img} src={currentImg} alt={alt} />
      </div>
    </div>
  );
};
