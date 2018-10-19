import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { loadImages, imagesLoaded, selectImage } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      imageSelected: '',
      previousImageSelected: '',
      imagesLoaded: false,
      images: []
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadImages action correctly', () => {
    const fixture = true;
    const expectedResult = state.set('imagesLoaded', fixture);

    expect(homeReducer(state, loadImages(fixture))).toEqual(expectedResult);
  });

  it('should handle the imagesLoaded action correctly', () => {
    const fixture = [
      'https://d30y9cdsu7xlg0.cloudfront.net/png/65350-200.png'
    ];
    const expectedResult = state.set('images', fixture);

    expect(homeReducer(state, imagesLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the selectImage action correctly when previous is empty', () => {
    const fixture = 'https://d30y9cdsu7xlg0.cloudfront.net/png/65350-200.png';
    const expectedResult = state
      .set('previousImageSelected', state.get('previousImageSelected'))
      .set('imageSelected', fixture);

    expect(homeReducer(state, selectImage(fixture))).toEqual(expectedResult);
  });

  it('should handle the selectImage action correctly when previous is not empty', () => {
    const fixture = 'https://d30y9cdsu7xlg0.cloudfront.net/png/65350-200.png';
    const fixturePrevious = 'https://d30y9cdsu7xlg0.cloudfront.net/png/65350-200-previous.png';
    state
      .set('previousImageSelected', fixturePrevious);
    const expectedResult = state
      .set('previousImageSelected', state.get('previousImageSelected'))
      .set('imageSelected', fixture);

    expect(homeReducer(state, selectImage(fixture))).toEqual(expectedResult);
  });
});
