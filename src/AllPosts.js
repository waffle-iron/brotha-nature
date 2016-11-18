import React, { Component } from 'react';

class AllPosts extends Component {
  render(){
    var posts = this.props.posts.map((post) => {
      return(
       <div key={post.id}>
        <h3>{ post.title }</h3>
        <p>{ post.body }</p>
       </div>
      )
    });
    return(
      <div>
        <h1>Posts</h1>
        { posts }
      </div>
    )
  }
}

export default AllPosts;
