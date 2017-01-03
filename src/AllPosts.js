import React, { Component } from 'react';
import Post from './Post';
import '../css/AllPosts.css';
let MediaQuery = require('react-responsive');

export default class AllPosts extends Component {
  render(){

    let postsDesktopStyle = {
      textAlign: "center",
      paddingTop: 50,
      position: "relative"
    }

    let postsMobileStyle = {
      textAlign: "center",
      paddingTop: 50,
      position: "relative",
      backgroundSize: "auto"
    }

    let posts = this.props.posts.map((post) => {
      return(
       <div key={post.id}>
         <Post post={post} />
       </div>
      )
    });
    
    return(
      <div>
        <MediaQuery minDeviceWidth={1280} values={{deviceWidth: 1280}}>
          <div className='allPosts' style={ postsDesktopStyle }>
            { posts }
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={320}>
          <div className='allPosts' style={ postsMobileStyle }>
            { posts }
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={375} minDeviceWidth={321}>
          <div className='allPosts' style={ {textAlign: "center",
                                            paddingTop: 50,
                                            position: "relative",
                                            width: 400} }>
            { posts }
          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={414} minDeviceWidth={376}>
          <div className='allPosts' style={ {textAlign: "center",
                                            paddingTop: 50,
                                            position: "relative",
                                            width: 440} }>
            { posts }
          </div>
        </MediaQuery>
      </div>
    )
  }
}
