import React, { Component } from "react";
import { firebaseMediaUpload } from '../actions/media-action';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
class MediaUpload extends Component {
    
    onMediaDrop (files) {
        const file = files[0];
        this.uploadMedia (file);
    };

    uploadMedia (media) {
        this.props.firebaseMediaUpload (media, this.props.uid);
    };

    render () {
        return (
            <div>
                <form>
                    <div className="FileUpload">
                        <Dropzone onDrop={ this.onMediaDrop.bind (this) } multiple={false}>
                            <div>Drop an image or click to select a file to upload.</div>
                        </Dropzone>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps ({socialSignIn}) {
    return socialSignIn;
  }

export default connect(mapStateToProps, { firebaseMediaUpload })(MediaUpload);
