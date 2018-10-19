import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../images/abihome-logo-header.svg';

import Header from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.length).toEqual(1);
  });

  it('should render the logo', () => {
    const renderedComponent = shallow(<Header />);
    expect(
      renderedComponent.contains(
        <img src={Logo} alt="ABIHOME" />
      )
    ).toBe(true);
  });

  it('should render the page title', () => {
    const renderedComponent = shallow(<Header />);
    expect(
      renderedComponent.contains(
        <h2>ABIHOME - React Webpage</h2>
      )
    ).toBe(true);
  });
});
