import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AllPosts from '../src/AllPosts';
import Post from '../src/Post';

const post = { id: 1,
                  title: 'It\'s a post',
                  body: 'It\'s mine',
                  image: {url: 'example.com'}
              };

let posts = [ post ];

const wrapper = mount(<AllPosts posts={posts}/>);

describe('<AllPosts />', () => {
  it('exists', () => {
    expect(wrapper).to.exist;
    expect(wrapper.props().posts).to.equal(posts);
  });

  it('renders a <Post /> component', () => {
    expect(wrapper.find(Post)).to.have.length(1);
  });

  it('renders a `.allPosts`', () => {
    expect(wrapper.find('.allPosts')).to.have.length(1);
  });

  it('renders new posts', () => {
    const post2 = { id: 2,
                    title: 'It\'s another post',
                    body: 'It\'s still mine',
                    image: {url: 'example2.com'}
                  };

    wrapper.setProps({ posts: [post, post2] });
    expect(wrapper.props().posts.length).to.equal(2);
    expect(wrapper.find(Post)).to.have.length(2);
  });
});
