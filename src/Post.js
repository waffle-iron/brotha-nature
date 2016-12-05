import React, { Component } from 'react';
import './Post.css'
let MediaQuery = require('react-responsive');

class Post extends Component {
  render() {

    let postDesktopStyle = {
      marginLeft: 500,
      width: 300,
      position: "relative"
    }

    let postMobileStyle = {
      width: 340,
      marginRight: 10,
      position: "relative"
    }

    let pStyle = {
      marginLeft: 10,
      marginRight: 10,
      paddingBottom: 50,
      paddingRight: 20,
      paddingLeft: 20,
      fontFamily: "sans-sarif",
      fontSize: 20,
      fontWeight: "bold",
      color: "black"
    }

    return (
      <div>
        <MediaQuery minDeviceWidth={1280} values={{deviceWidth: 1280}}>
          <div className='post' style={postDesktopStyle}>
            <img src={this.props.post.image.url}
              role="presentation"
              style={{width: postDesktopStyle.width - 40, paddingTop: 20, size: "contain"}} />

            <h3 style={{color: "black"}}>{ this.props.post.title }</h3>
            <hr></hr>
            <p style={pStyle}>{ this.props.post.body }</p>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={320}>
          <div className='mobile-post' style={postMobileStyle}>
            <img src={this.props.post.image.url}
              role="presentation"
              style={{width: postMobileStyle.width - 50, paddingTop: 20, size: "contain"}} />

            <h3 style={{color: "black"}}>{ this.props.post.title }</h3>
            <hr></hr>
            <p style={pStyle}>{ this.props.post.body }</p>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={375} minDeviceWidth={321}>
          <div className='mobile-post' style={{width: 400, position: "relative"}}>
            <img src={this.props.post.image.url}
              role="presentation"
              style={{width: postMobileStyle.width - 50, paddingTop: 20, size: "contain"}} />

            <h3 style={{color: "black"}}>{ this.props.post.title }</h3>
            <hr></hr>
            <p style={pStyle}>{ this.props.post.body }</p>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={414} minDeviceWidth={376}>
          <div className='mobile-post' style={{width: 440, position: "relative"}}>
            <img src={this.props.post.image.url}
              role="presentation"
              style={{width: postMobileStyle.width - 50, paddingTop: 20, size: "contain"}} />

            <h3 style={{color: "black"}}>{ this.props.post.title }</h3>
            <hr></hr>
            <p style={pStyle}>{ this.props.post.body }</p>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Post;
