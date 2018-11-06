import * as FirebaseConfig from './firebase-config';


export function signInWithGoogle() {
    return FirebaseConfig.authProvider.signInWithPopup(FirebaseConfig.googleAuthProvider);
}

export function signInWithFaceBook() {
    return FirebaseConfig.authProvider.signInWithPopup(FirebaseConfig.facebookAuthProvider);
}

export function signInWithGithub() {
    return FirebaseConfig.authProvider.signInWithPopup(FirebaseConfig.githubAuthProvider);
}

export function signInWithTwitter() {
    return FirebaseConfig.authProvider.signInWithPopup(FirebaseConfig.twitterAuthProvider);
}


export function signout () {
    return FirebaseConfig.authProvider.signOut();
}