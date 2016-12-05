import React, { Component } from 'react';

class Post extends Component {
  render() {
    const bodyStyle = {
      marginLeft: 240,
      marginRight: 240,
      marginBottom: 50
    }
    return (
      <div>
        <img src={this.props.post.image.url}
        role="presentation"
        style={{width: 300, height: 400}} />

        <h3>{ this.props.post.title }</h3>
        <p style={bodyStyle}>{ this.props.post.body }</p>
      </div>
    )
  }
}

export default Post;
