import React from 'react';
import { shallow, mount } from 'enzyme';
import ListItem from 'components/ListItem';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { loadImages, selectImage } from '../actions';

describe('<HomePage />', () => {
  it('should render the image items', () => {
    const onLoadImagesSpy = jest.fn();
    const images = [
      'image 1',
      'image 2'
    ];
    const renderedComponent = shallow(
      <HomePage
        loading
        images={images}
        onLoadImages={onLoadImagesSpy}
      />
    );
    expect(renderedComponent.find(ListItem).length).toBe(images.length);
  });

  it('should render fetch the repos on mount if a username exists', () => {
    const onSelectImageSpy = jest.fn();
    const onLoadImagesSpy = jest.fn();
    mount(
      <HomePage
        images={[]}
        imagesLoaded={false}
        imageSelected=""
        previousImageSelected=""
        onLoadImages={onLoadImagesSpy}
        onSelectImage={onSelectImageSpy}
      />
    );
    expect(onLoadImagesSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onLoadImages', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoadImages).toBeDefined();
      });

      it('should dispatch onLoadImages when load and imagesLoaded is false', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const fixture = true;
        result.onLoadImages(fixture);
        expect(dispatch).toHaveBeenCalledWith(loadImages(fixture));
      });
    });

    describe('onSelectImage', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSelectImage).toBeDefined();
      });

      it('should dispatch onSelectImage when click on image', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const fixture = 'image 1';
        result.onSelectImage(fixture);
        expect(dispatch).toHaveBeenCalledWith(selectImage(fixture));
      });
    });
  });
});
