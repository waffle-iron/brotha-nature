import React, { Component } from 'react';

class Post extends Component {
  render() {
    let postImage = require('../images/plant_row.jpg')

    let postStyle = {
      marginLeft: 200,
      marginRight: 200,
      position: "relative",
      bottom: 690
    }

    let imageStyle = {
      backgroundImage: 'url(' + postImage + ')',
      backgroundSize: "cover",
      height: 700,
      width: 700,
      marginLeft: 290,
      marginRight: 200,
      opacity: 0.2
    }

    let pStyle = {
      marginLeft: 200,
      marginRight: 200,
      fontFamily: "sans-sarif",
      fontSize: 18,
      fontWeight: "bold"
    }
    return (
      <div>
        <div style={imageStyle}></div>
        <div style={postStyle}>
          <img src={this.props.post.image.url}
            role="presentation"
            style={{width: 300, height: 400, paddingTop: 20}} />

          <h3>{ this.props.post.title }</h3>
          <p style={pStyle}>{ this.props.post.body }</p>
        </div>
      </div>
    )
  }
}

export default Post;
