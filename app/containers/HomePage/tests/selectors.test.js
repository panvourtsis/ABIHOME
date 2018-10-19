import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectImagesLoaded,
  makeSelectImages,
  makeImageSelected,
  makePreviousImageSelected,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectImagesLoaded', () => {
  const selectImagesLoadedSelector = makeSelectImagesLoaded();
  it('should select the imagesLoaded', () => {
    const imagesLoaded = true;
    const mockedState = fromJS({
      home: {
        imagesLoaded,
      },
    });
    expect(selectImagesLoadedSelector(mockedState)).toEqual(imagesLoaded);
  });
});

describe('makeSelectImages', () => {
  const makeSelectImagesSelector = makeSelectImages();
  it('should select the images', () => {
    const images = fromJS([
      'image 1',
      'image 2',
    ]);
    const mockedState = fromJS({
      home: {
        images,
      },
    });
    expect(makeSelectImagesSelector(mockedState)).toEqual(images);
  });
});

describe('makeImageSelected', () => {
  const makeImageSelectedSelector = makeImageSelected();
  it('should select the imageSelected', () => {
    const imageSelected = 'image 1';
    const mockedState = fromJS({
      home: {
        imageSelected,
      },
    });
    expect(makeImageSelectedSelector(mockedState)).toEqual(imageSelected);
  });
});

describe('makePreviousImageSelected', () => {
  const makePreviousImageSelectedSelector = makePreviousImageSelected();
  it('should select the imageSelected', () => {
    const previousImageSelected = 'image 1';
    const mockedState = fromJS({
      home: {
        previousImageSelected,
      },
    });
    expect(makePreviousImageSelectedSelector(mockedState)).toEqual(previousImageSelected);
  });
});
