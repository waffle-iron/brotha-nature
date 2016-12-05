import React, { Component } from 'react';

class Banner extends Component {
  render(){
    let bannerImage = require('../images/long_leaves.png')
    let headerStyle = {
      textAlign: "center",
      paddingTop: 100,
      color: "#63b074"
    }

    let bannerStyle = {
      backgroundImage: 'url(' + bannerImage + ')',
      height: 250,
      backgroundSize: "cover"
    }
    return (
      <div style={bannerStyle}>
        <h1 style={headerStyle}>BrothaNature</h1>
      </div>
    )
  }
};

export default Banner;
