import React, { Component } from 'react';
import './App.css';
import AllPosts from './AllPosts';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
   axios.get('http://brotha-nature-api.herokuapp.com/api/v1/posts')
   .then(response => {
     this.setState({ posts: response.data });
   });
  }

  render() {
    return (
      <div>
        <AllPosts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
