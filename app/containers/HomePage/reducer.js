import { fromJS } from 'immutable';

import {
  LOAD_IMAGES,
  LOAD_IMAGES_SUCCESS,
  SELECT_IMAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  imageSelected: '',
  previousImageSelected: '',
  imagesLoaded: false,
  images: []
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_IMAGES:
      return state.set('imagesLoaded', action.imagesLoaded);
    case LOAD_IMAGES_SUCCESS:
      return state.set('images', action.images);
    case SELECT_IMAGE:
      return state
        .set('previousImageSelected', state.get('imageSelected'))
        .set('imageSelected', action.image);
    default:
      return state;
  }
}

export default homeReducer;
