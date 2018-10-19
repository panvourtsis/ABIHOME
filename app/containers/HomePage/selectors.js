import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectImagesLoaded = () => createSelector(
  selectHome,
  (homeState) => homeState.get('imagesLoaded')
);

const makeSelectImages = () => createSelector(
  selectHome,
  (globalState) => globalState.get('images')
);

const makeImageSelected = () => createSelector(
  selectHome,
  (globalState) => globalState.get('imageSelected')
);

const makePreviousImageSelected = () => createSelector(
  selectHome,
  (globalState) => globalState.get('previousImageSelected')
);

export {
  selectHome,
  makeSelectImagesLoaded,
  makeSelectImages,
  makeImageSelected,
  makePreviousImageSelected,
};
