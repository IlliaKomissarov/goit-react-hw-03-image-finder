import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onImageClick,
}) => (
  <li
    className={css.imageGalleryItem}
    onClick={() => onImageClick(largeImageURL, tags)}
  >
    <img
      className={css.imageGalleryItemImage}
      width="100"
      src={webformatURL}
      alt={tags}
      loading="lazy"
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};