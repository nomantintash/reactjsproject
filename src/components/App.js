import React, { Component } from 'react';
import { connect } from "react-redux";
import { socialSignIn, authStateChanged} from '../actions/social-signin-action';
import { getAllMediaFromFirebase } from '../actions/media-action';
import { Route } from 'react-router-dom';
import MediaDetail from './media-detail'
import Home from './home';
class App extends Component {
    socialSignIn = (event) => {
        const signInType = event.target.name
        switch (signInType) {
            case 'facebook':
                this.props.socialSignIn(signInType);
                break;
            case 'google':
                this.props.socialSignIn(signInType);
                break;
            case 'github':
                this.props.socialSignIn(signInType);
                break;
            case 'twitter':
                this.props.socialSignIn(signInType);
                break;
            default:
                break;
        }
    }
    componentWillMount() {
        this.props.authStateChanged()
        this.props.getAllMediaFromFirebase();
    }
    componentWillReceiveProps (nextProps) {
        console.log ('componentWillReceiveProps APP.JS', nextProps)
        // if (nextProps.user.displayName && nextProps.user.uid) {
        //     console.log('pushing to home')
        //     this.props.history.push({
        //         pathname: '/home'
        //     });
        // }
    }
    someComponent = () => {
        return (
            <div className="row justify-content-center" style = {cardBackground}>
            <div className="card text-center border-primary mb-3 align-middle" style={cardStyle}>
                <div className="card-header">
                <h5 className="card-title">Sign In Using</h5>
                </div>
                <div className="card-body">
                    <button 
                    type="button" className="btn" name = "facebook" style = { buttonStyle } onClick = { this.socialSignIn } >
                    Facebook
                    </button>
                    <button type="button" className="btn" name = "google" style = { buttonStyle } onClick = { this.socialSignIn }>Google</button>
                    <button type="button" className="btn" name = "github" style = { buttonStyle } onClick = { this.socialSignIn }>Github</button>
                    <button type="button" className="btn" name = "twitter" style = { buttonStyle } onClick = { this.socialSignIn }>Twitter</button>

                </div>
                <div className="card-footer text-muted">
                    {this.props.error}
                </div>
            </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Route path="/media-detail" component = { MediaDetail } />
                <Route path="/home" component = {Home}/>
                <Route exact path="/" component = {this.someComponent}/>
            </div>
            
            
        )
    }
}

const buttonStyle = {
    cursor: 'pointer',
    display: 'block',
    margin: '10px auto',
    border: '1px solid black',
    width: '200px',
}

const cardStyle = {
    position: 'absolute',
    width: '18rem',
    height: '17rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const cardBackground = {
    position:'relative',
    height:'100vh'

}

function mapStateToProps ({socialSignIn}) {
    return {
        user: socialSignIn
    }
}


export default connect (mapStateToProps, { 
    socialSignIn, authStateChanged, getAllMediaFromFirebase })(App);