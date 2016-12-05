import React, { Component } from 'react';
import './App.css';
import AllPosts from './AllPosts';
import Banner from './Banner';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    setInterval(() => {
      axios.get('https://brotha-nature-api.herokuapp.com/api/v1/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(function(error){
        console.log(error);
      })
    }, 1000);
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

export default App;
