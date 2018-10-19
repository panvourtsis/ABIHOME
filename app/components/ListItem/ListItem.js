import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const activeClass = (imageSelected, image) => ((imageSelected === image) ? ' active' : '');

const ListItem = ({ image, imageSelected, onSelectImage }) => (
  <div
    role="presentation"
    onClick={() => onSelectImage(image)}
    onKeyDown={() => onSelectImage(image)}
    className={`image-item-wrapper${activeClass(imageSelected, image)}`}
  >
    <img
      alt=""
      src={image}
      className="image-item"
    />
  </div>
);

ListItem.propTypes = {
  image: PropTypes.string,
  imageSelected: PropTypes.string,
  onSelectImage: PropTypes.func
};

export default ListItem;
