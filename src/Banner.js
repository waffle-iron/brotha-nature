import React, { Component } from 'react';
let MediaQuery = require('react-responsive');


class Banner extends Component {
  render(){
    let bannerImage = require('../images/long_leaves.png')

    let headerDesktopStyle = {
      textAlign: "center",
      paddingTop: 100,
      color: "#63b074"
    }

    let headerMobileStyle = {
      textAlign: "center",
      paddingTop: 100,
      color: "#63b074"
    }

    let bannerDesktopStyle = {
      backgroundImage: 'url(' + bannerImage + ')',
      height: 250,
      backgroundSize: "cover"
    }

    let bannerMobileStyle = {
      backgroundImage: 'url(' + bannerImage + ')',
      height: 250,
      width: 200,
      backgroundSize: "cover"
    }
    return (
      <div>
        <MediaQuery minDeviceWidth={1280} values={{deviceWidth: 1280}}>
          <div style={bannerDesktopStyle}>
            <h1 style={headerDesktopStyle}>BrothaNature</h1>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={320}>
          <div style={bannerMobileStyle}>
            <h1 style={headerMobileStyle}>BrothaNature</h1>
          </div>
        </MediaQuery>
      </div>
    )
  }
};

export default Banner;
