// Vendor
import React from 'react';
import td from 'testdouble';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Internal
import Home from '../Home';

describe('Home: test', () => {
  let props;

  // Any initialization
  beforeEach(() => {
    props = {
      // stub your component's props here
    };
  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<Home {...props} />);

    expect(wrapper).to.not.be.empty();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {
    expect(false).to.be.true();
  });
});
