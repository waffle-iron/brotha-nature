import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Post from '../src/Post';

const post = { id: 1,
                  title: 'It\'s a post',
                  body: 'It\'s mine',
                  image: {url: 'example.com'}
              };

const wrapper = mount(<Post post={post}/>);

describe('<Post />', () => {
  it('exists', () => {
    expect(wrapper).to.exist;
    expect(wrapper.props().post).to.equal(post)
  });

  it('renders a `.post`', () => {
    expect(wrapper.find('.post')).to.have.length(1);
    expect(wrapper.text()).to.contain('It\'s a post');
    expect(wrapper.text()).to.contain('It\'s mine');
    expect(wrapper.html()).to.contain('example.com');
  });
});
