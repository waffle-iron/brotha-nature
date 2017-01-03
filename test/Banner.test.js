import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Banner from '../src/Banner';

const wrapper = shallow(<Banner />);

describe('<Banner />', () => {
  it('exists', () => {
    expect(wrapper).to.exist;
  });
});
