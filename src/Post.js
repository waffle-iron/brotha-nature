import React, { Component } from 'react';
import '../css/Post.css'
import Fade from 'react-fade';
import MediaQuery from 'react-responsive';

export default class Post extends Component {
  render() {

    let postDesktopStyle = {
      margin: "auto",
      width: 300,
      position: "relative"
    }

    let postMobileStyle = {
      textAlign: 'center',
      width: 340,
      margin: "auto",
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
        <Fade duration='4.5'>
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
        </Fade>

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

        <MediaQuery maxDeviceWidth={1024} minDeviceWidth={568}>
          <div className='mobile-post' style={{paddingLeft: 250, width: 500, position: "relative"}}>
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
