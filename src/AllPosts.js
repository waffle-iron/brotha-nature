import React, { Component } from 'react';
import Post from './Post';

class AllPosts extends Component {
  render(){
    let mainImage = require('../images/veggies.jpg')

    let postStyle = {
      textAlign: "center",
      backgroundImage: 'url(' + mainImage + ')',
      paddingTop: 50,
      resizeMode: "cover"
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
