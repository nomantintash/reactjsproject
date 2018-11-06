import firebase from "firebase";
const fbdatabase = firebase.database();

export function findAndCreateUser (user) {
    const uid = user.uid
    const usersRef = fbdatabase.ref(`users/${uid}`);
    usersRef.set(user);
    return;
}