import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBmWKF66fZTcIr-KI_PSk3X9FyDUU5_Fmw",
  authDomain: "noman-tintash.firebaseapp.com",
  databaseURL: "https://noman-tintash.firebaseio.com",
  projectId: "noman-tintash",
  storageBucket: "noman-tintash.appspot.com",
  messagingSenderId: "473688893724"
};
firebase.initializeApp(config);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const authProvider = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();


export { 
    authProvider,
    googleAuthProvider,
    facebookAuthProvider,
    githubAuthProvider,
    twitterAuthProvider
};
