import React from 'react';
import sinon from 'sinon';
import { render } from 'enzyme';
import { expect } from 'chai';
import Banner from '../src/Banner';

const wrapper = render(<Banner />);

describe('<Banner />', () => {
  it('exists', () => {
    expect(wrapper).to.exist;
  });

  it('renders a `.banner`', () => {
    expect(wrapper.find('.banner')).to.have.length(1);
  });

  it('renders a header', () => {
    expect(wrapper.text()).to.contain('BrothaNature');
  });
});
