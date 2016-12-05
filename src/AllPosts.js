import React, { Component } from 'react';
import Post from './Post';

class AllPosts extends Component {
  render(){
    const postStyle = {
      textAlign: "center"
    }
    var posts = this.props.posts.map((post) => {
      return(
       <div key={post.id}>
         <Post post={post} />
       </div>
      )
    });
    return(
      <div style={ postStyle }>
        { posts }
      </div>
    )
  }
}

export default AllPosts;
