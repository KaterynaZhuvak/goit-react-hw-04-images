import css from './ImadeGallery.module.css';

export const ImageGalleryItem = ({ image, tags, id, largeimage }) => {
  return (
    <li className={css.photo}>
      <img id={id} src={image} alt={tags} largeimage={largeimage} />
    </li>
  );
};
