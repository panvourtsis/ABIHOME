import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class HomePage extends PureComponent {
  componentDidMount() {
    if (!this.props.imagesLoaded) {
      this.props.onLoadImages();
    }
  }

  render() {
    const {
      images, onSelectImage, imageSelected, previousImageSelected
    } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div className="home-page">

          <div className="image-wrapper">
            {images.map((imageItem) => (
              <ListItem
                key={imageItem}
                image={imageItem}
                onSelectImage={onSelectImage}
                imageSelected={imageSelected}
              />
            ))}
          </div>

          <div>
            <h2>Last selected</h2>
            <div>{imageSelected}</div>
          </div>

          <div>
            <h2>Previously selected</h2>
            <div>{previousImageSelected}</div>
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  imagesLoaded: PropTypes.bool,
  imageSelected: PropTypes.string,
  previousImageSelected: PropTypes.string,
  onLoadImages: PropTypes.func,
  onSelectImage: PropTypes.func
};
