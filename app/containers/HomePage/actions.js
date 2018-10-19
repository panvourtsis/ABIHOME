import {
  LOAD_IMAGES,
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES_ERROR,
  SELECT_IMAGE,
} from './constants';


/**
 * Changes the state of loading images
 * @param  {boolean} imagesLoaded - The boolean type of the state
 * @return {object} An action object with a type of LOAD_IMAGES
 */
export function loadImages(areImagesLoaded) {
  return {
    type: LOAD_IMAGES,
    imagesLoaded: areImagesLoaded
  };
}

/**
 * Dispatched when loading the images succesfully
 * @param  {array} images - The array of images fetched
 * @return {object} An action object with a type of LOAD_IMAGES_SUCCESS
 */
export function imagesLoaded(images) {
  return {
    type: LOAD_IMAGES_SUCCESS,
    images,
  };
}

/**
 * Dispatched when loading the images fails
 * @return {object} An action object with a type of LOAD_IMAGES_ERROR
 */
export function imagesLoadedError() {
  return {
    type: LOAD_IMAGES_ERROR,
  };
}

/**
 * Dispatched when selecting an image from the list
 * @param  {string} image - The image clicked
 * @return {object} An action object with a type of SELECT_IMAGE
 */
export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image,
  };
}
