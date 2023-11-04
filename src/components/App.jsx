import React, { useState, useEffect } from 'react';

import axios from 'axios';

import css from './App.module.css';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');
  const [totalImages, setTotalImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [alt, setAlt] = useState(null);

  const onSubmit = value => {
    setInput(value);
    setImages([]);
    setCurrentPage(1);
  };

  // const onClick = page => {
  //   setCurrentPage(page);
  // };

  useEffect(() => {
    if (!input) {
      return;
    }

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://pixabay.com/api/?q=${input}&page=${currentPage}&key=39488984-2cdf64825ff5a66680c809fac&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(prevState => [...prevState, ...data.hits]);
        setTotalImages(data.totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [currentPage, input]);

  const openModal = (imageImg, tags) => {
    setIsOpen(true);
    setLargeImage(imageImg);
    setAlt(tags);
  };

  const closeModal = () => {
    setIsOpen(false);
    setLargeImage(null);
    setAlt(null);
  };

  const handleLoadMore = () => {
    setCurrentPage(prevState => 
      prevState + 1
    )};

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <SearchBar onSubmit={onSubmit} />
      </div>
      {isLoading && <Loader />}
      {error !== null && (
        <p>Oops, some error occured... Error message: {error}</p>
      )}
      <ImageGallery images={images} openModal={openModal} />
      {totalImages > 12 && <Button onClick={handleLoadMore} />}
      {isOpen && (
        <Modal currentImg={largeImage} alt={alt} closeModal={closeModal} />
      )}
    </div>
  );
};
