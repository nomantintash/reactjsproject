import * as Authenticator from '../firebase/firebase-signin';
import { authProvider } from '../firebase/firebase-config';
import { findAndCreateUser } from '../firebase/firebase-user';
export const USER_LOGIN_SUCCESSFUL = 'USER_LOGIN_SUCCESSFUL';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export function signout () {
    return (dispatch) => {
        return Authenticator.signout().then(dispatch(signoutSuccessfull())).catch();
    }
}

export function socialSignIn (socialSignInType) {
    switch (socialSignInType) {
        case 'facebook':
            return (dispatch) => {
                return Authenticator.signInWithFaceBook().then (user => {
                    dispatch (successResponse (user));
                }).catch (err => {
                    dispatch (failureResponse (err));
                });
            }
        case 'google':
            return (dispatch) => {
                return Authenticator.signInWithGoogle().then(user => {
                    dispatch (successResponse (user));
                }).catch (err => {
                    dispatch (failureResponse (err));
                });
            };
        case 'github':
            return (dispatch) => {
                return Authenticator.signInWithGithub().then (user => {
                    dispatch (successResponse (user));
                }).catch (err => {
                    dispatch (failureResponse (err));
                });
            };
        case 'twitter':
            return (dispatch) => {
                return Authenticator.signInWithTwitter().then (user => {
                    dispatch (successResponse (user));
                }).catch (err => {
                    dispatch (failureResponse (err));
                });
            }
        default:
            break;
    };
};

export function authStateChanged () {
    return (dispatch) => {
        return authProvider.onAuthStateChanged(function(response) {
            console.log('on auth state changed', response)
            if(!response) dispatch(authChange('User logged out'));
            dispatch(authChange(response));
        })
    }
}

function successResponse ({user}) {
    const userData = {
        'email': user.email,
        'photoURL': user.photoURL,
        'displayName': user.displayName,
        'uid': user.uid
    };
    findAndCreateUser (userData)
    return {
        type: USER_LOGIN_SUCCESSFUL,
        payload: userData
    };
}

function authChange (user) {
    if(!user) {
        return {
            type: USER_LOGGED_OUT
        }
    }
    const userData = {
        'email': user.email,
        'photoURL': user.photoURL,
        'displayName': user.displayName,
        'uid': user.uid
    };
    findAndCreateUser (userData)
    return {
        type: USER_LOGIN_SUCCESSFUL,
        payload: userData
    };
}

function failureResponse (error) {
    return {
        type: USER_LOGIN_FAILED,
        payload: error.message
    };
}

function signoutSuccessfull () {
    return {
        type: USER_LOGGED_OUT
    };
}