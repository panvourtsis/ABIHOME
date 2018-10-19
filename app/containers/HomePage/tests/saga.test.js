import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_IMAGES } from '../constants';
import { imagesLoaded, imagesLoadedError } from '../actions';

import homeData, { getImages } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('getImages Saga', () => {
  let getImagesGenerator;

  beforeEach(() => {
    getImagesGenerator = getImages();

    const selectDescriptor = getImagesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the imagesLoaded action if it requests the data successfully', () => {
    const response = [
      'first image',
      'second image',
      'third image'
    ];
    const putDescriptor = getImagesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(imagesLoaded(response)));
  });

  it('should call the imagesLoadedError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getImagesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(imagesLoadedError()));
  });
});

describe('homeData Saga', () => {
  const homeDataSaga = homeData();

  it('should start task to watch for LOAD_IMAGES action', () => {
    const takeLatestDescriptor = homeDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_IMAGES, getImages));
  });
});
