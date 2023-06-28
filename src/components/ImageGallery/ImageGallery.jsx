import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ hits, onItemClick }) => {
  const elements = hits.map(element => (
    <ImageGalleryItem
      key={element.id}
      {...element}
      onImageClick={onItemClick}
    />
  ));
  return <ul className={css.imageGallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape()),
  onItemClick: PropTypes.func,
};