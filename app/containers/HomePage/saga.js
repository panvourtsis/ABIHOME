import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_IMAGES } from './constants';
import { imagesLoaded, imagesLoadedError } from './actions';

export function* getImages() {
  const requestURL = 'http://weyveed.herokuapp.com/test/images';

  try {
    const images = yield call(request, requestURL);
    yield put(imagesLoaded(images));
  } catch (err) {
    yield put(imagesLoadedError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeData() {
  yield takeLatest(LOAD_IMAGES, getImages);
}
