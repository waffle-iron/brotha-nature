import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
  render() {

    let postStyle = {
      marginLeft: 200,
      marginRight: 200,
      position: "relative"
    }

    let pStyle = {
      marginLeft: 100,
      marginRight: 100,
      fontFamily: "sans-sarif",
      fontSize: 20,
      fontWeight: "bold"
    }

    // let imageStyle = {
    //   backgroundImage: 'url(' + postImage + ')',
    //   backgroundSize: "cover",
    //   height: 700,
    //   width: 700,
    //   marginLeft: 290,
    //   marginRight: 200,
    //   opacity: 0.2
    // }

    return (
      // <div>
        // <div style={imageStyle}></div>
        <div className='post' style={postStyle}>
          <img src={this.props.post.image.url}
            role="presentation"
            style={{paddingTop: 20, size: "contain"}} />

          <h3>{ this.props.post.title }</h3>
          <p style={pStyle}>{ this.props.post.body }</p>
        </div>
      // </div>
    )
  }
}

export default Post;
