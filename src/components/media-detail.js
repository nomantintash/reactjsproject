import React, { Component } from 'react';
import { connect } from 'react-redux';
class MediaDetail extends Component {
    renderProps = () => {
        if(!this.props.location.media) return (<div>Loading Data </div>)
        return (
            <img src = {this.props.location.media.mediaURL} width = "200px" height = "200px"/>
        )
    }
    render () {
        console.log('media detail page')
        return(
            <div>
                {this.renderProps()}
            </div>
        );
    };
};

function mapStateToProps(state) {
    console.log("************", state)
    return state
    // return {
    //     media: mediaReducer.media
    // }
} 

export default connect(mapStateToProps, {})(MediaDetail);

