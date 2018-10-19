import {
  LOAD_IMAGES,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_ERROR,
  SELECT_IMAGE,
} from '../constants';

import { loadImages, imagesLoaded, selectImage, imagesLoadedError } from '../actions';

describe('Home Actions', () => {
  describe('loadImages', () => {
    it('should return the correct boolean type for imagesLoaded', () => {
      const fixture = true;
      const expectedResult = {
        type: LOAD_IMAGES,
        imagesLoaded: fixture
      };

      expect(loadImages(fixture)).toEqual(expectedResult);
    });

    it('should return the correct array type for images', () => {
      const fixture = [
        'https://d30y9cdsu7xlg0.cloudfront.net/png/65350-200.png'
      ];
      const expectedResult = {
        type: LOAD_IMAGES_SUCCESS,
        images: fixture
      };

      expect(imagesLoaded(fixture)).toEqual(expectedResult);
    });

    it('should return the correct string type for the selected image', () => {
      const fixture = 'https://d30y9cdsu7xlg0.cloudfront.net/png/65350-200.png';
      const expectedResult = {
        type: SELECT_IMAGE,
        image: fixture
      };

      expect(selectImage(fixture)).toEqual(expectedResult);
    });

    it('should return the correct string type for the images fetch error', () => {
      const expectedResult = {
        type: LOAD_IMAGES_ERROR
      };

      expect(imagesLoadedError()).toEqual(expectedResult);
    });
  });
});
