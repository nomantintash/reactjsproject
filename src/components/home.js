import React, { Component } from "react";
import { signout } from '../actions/social-signin-action';
import { getAllMediaFromFirebase } from '../actions/media-action';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MediaUpload from './upload-media';
import MediaDetail from './media-detail';
class Home extends Component {

  componentWillMount() {
    console.log('componentWillMount HOME', this.props)
    //if(!this.props.user.displyName && !this.props.user.uid)
    // this.props.history.push('/');
  }
  logout = ()  => {
    this.props.signout();
  }
  handleVideoClick = (media, key) => {
    media.key = key;
    this.props.history.push({
      pathname: '/media-detail',
      //media: media,
      //search: media.key
    });
  }
  renderMedia = () => {
    if (!this.props.media) return (<div>Loading Media</div>)
    return Object.keys(this.props.media).map((key, index, data) => {
        return (
          <div className="media-body" key = { key } onClick = { event => {this.handleVideoClick(this.props.media[key], key)} }>
            <img src = {this.props.media[key].mediaURL} width="100px" height="100px"/>
          </div>
        )
    });
  }
  renderSomeComponent =() =>{
    return (
      <div>
        
        <MediaUpload/>
        <button className = "btn btn-primary" onClick = { this.logout }>Logout</button>
        <div className="media">
        { this.renderMedia() }
        </div>
        
      </div>
    )
  }
  render() {
    console.log('home page ')
    return (
      <div>
        
        <MediaUpload/>
        <button className = "btn btn-primary" onClick = { this.logout }>Logout</button>
        <div className="media">
        { this.renderMedia() }
        </div>
        
      </div>
    )
  }
}


function mapStateToProps ({socialSignIn, mediaReducer}) {
  return {
    user: socialSignIn,
    media: mediaReducer.media
  };
}
export default connect(mapStateToProps, { signout, getAllMediaFromFirebase })(Home);