import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from '../src/App';
import Banner from '../src/Banner';
import AllPosts from '../src/AllPosts';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('exists', () => {
    expect(wrapper).to.exist;
  });

  it('renders a <Banner /> component', () => {
    expect(wrapper.find(Banner)).to.have.length(1);
  });

  it('renders an <AllPosts /> component', () => {
    expect(wrapper.find(AllPosts)).to.have.length(1);
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});
