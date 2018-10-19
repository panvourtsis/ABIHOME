import React from 'react';
import { mount, shallow } from 'enzyme';

import ListItem from '../index';

describe('<ListItem />', () => {
  it('should have an image', () => {
    const renderedComponent = mount(<ListItem image={'image 1'} />);
    expect(renderedComponent.find('img').prop('src')).toBeDefined();
  });

  it('should not have an active class', () => {
    const renderedComponent = shallow(<ListItem image={'image 1'} />);
    expect(renderedComponent.prop('className')).toBe('image-item-wrapper');
  });

  it('should have an onSelectImage is called', () => {
    const onSelectImage = jest.fn();
    const renderedComponent = shallow(<ListItem onSelectImage={onSelectImage} />);
    renderedComponent.simulate('click');

    expect(onSelectImage).toHaveBeenCalled();
  });

  it('should have an onSelectImage to be active', () => {
    const onSelectImage = jest.fn();
    const image = 'image 1';
    const renderedComponent = shallow(
      <ListItem onSelectImage={onSelectImage} image={image} imageSelected={image} />
    );

    expect(renderedComponent.prop('className')).toBe('image-item-wrapper active');
  });
});
