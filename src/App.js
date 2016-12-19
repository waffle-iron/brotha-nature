import React, { Component } from 'react';
import AllPosts from './AllPosts';
import Banner from './Banner';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = { posts: [] };
  }


  fetchPosts() {
     axios.get('https://brotha-nature-api.herokuapp.com/api/v1/posts')
      .then(response => {
        if (response.length === this.state.posts.length) return
        this.setState({ posts: response.data });
      })
      .catch(function(error){
        console.log(error);
      })
  }

  componentDidMount() {
    this.fetchPosts()
    setInterval(() => {
      this.fetchPosts()
    }, 9000);
  }

  render() {
    return (
      <div>
        <Banner />
        <AllPosts posts={this.state.posts} />
      </div>
    );
  }
}
