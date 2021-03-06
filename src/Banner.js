import React, { Component } from 'react';
let MediaQuery = require('react-responsive');


export default class Banner extends Component {
  render(){
    let bannerImage = require('../images/long_leaves.png')

    let headerStyle = {
      textAlign: "center",
      paddingTop: 100,
      color: "#63b074",
      fontSize: 18
    }

    let bannerDesktopStyle = {
      backgroundImage: 'url(' + bannerImage + ')',
      height: 250,
      backgroundSize: "cover"
    }

    let bannerMobileStyle = {
      backgroundImage: 'url(' + bannerImage + ')',
      height: 250,
      width: 350,
      backgroundSize: "cover"
    }
    return (
      <div className='banner'>
        <MediaQuery minDeviceWidth={1280} values={{deviceWidth: 1280}}>
          <div style={bannerDesktopStyle}>
            <h1 style={{textAlign: "center",
                       paddingTop: 100,
                       color: "#63b074"}}>BrothaNature</h1>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={320}>
          <div style={bannerMobileStyle}>

            <h1 style={headerStyle}>BrothaNature</h1>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={375} minDeviceWidth={321}>
          <div style={{backgroundImage: 'url(' + bannerImage + ')',
                       height: 250,
                       width: 400,
                       backgroundSize: "cover"}}>

            <h1 style={headerStyle}>BrothaNature</h1>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={414} minDeviceWidth={376}>
          <div style={{backgroundImage: 'url(' + bannerImage + ')',
                       height: 250,
                       width: 440,
                       backgroundSize: "cover"}}>

            <h1 style={headerStyle}>BrothaNature</h1>
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={1024} minDeviceWidth={568}>
          <div style={{backgroundImage: 'url(' + bannerImage + ')',
                       height: 250,
                       width: 1000,
                       backgroundSize: "cover"}}>

            <h1 style={headerStyle}>BrothaNature</h1>
          </div>
        </MediaQuery>
      </div>
    )
  }
};
