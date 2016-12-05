import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
  render() {

    let postStyle = {
      marginLeft: 500,
      width: 300,
      position: "relative"
    }

    let pStyle = {
      marginLeft: 10,
      marginRight: 10,
      fontFamily: "sans-sarif",
      fontSize: 20,
      fontWeight: "bold",
      color: "#b8bab8",
      paddingBottom: 50
    }

    return (
      <div className='post' style={postStyle}>
        <img src={this.props.post.image.url}
          role="presentation"
          style={{width: postStyle.width - 50, paddingTop: 20, size: "contain"}} />

        <h3 style={{color: "#b8bab8"}}>{ this.props.post.title }</h3>
        <hr></hr>
        <p style={pStyle}>{ this.props.post.body }</p>
      </div>
    )
  }
}

export default Post;
