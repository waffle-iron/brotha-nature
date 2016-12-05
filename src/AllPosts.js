import React, { Component } from 'react';
import Post from './Post';
import './AllPosts.css';

class AllPosts extends Component {
  render(){
    // let mainImage = require('../images/veggies.jpg')

    let postStyle = {
      textAlign: "center",
      paddingTop: 50,
      position: "relative"
    }

    var posts = this.props.posts.map((post) => {
      return(
       <div key={post.id}>
         <Post post={post} />
       </div>
      )
    });
    return(
      <div className='allPosts' style={ postStyle }>
        { posts }
      </div>
    )
  }
}

export default AllPosts;
