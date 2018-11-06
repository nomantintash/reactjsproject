import { uploadMedia } from '../firebase/firebase-media';
import firebase from 'firebase';
const fbdatabase = firebase.database();
const mediaRef = fbdatabase.ref('media');
export const UPLOAD_SUCCESFULL = 'UPLOAD_SUCCESFULL';
export const UPLOAD_FAILED = 'UPLOAD_FAILED';
export const ALL_MEDIA = 'ALL_MEDIA';

export function firebaseMediaUpload (file, userId) {
    console.log('in firebase media upload action ')
    return (dispatch) => {
            uploadMedia(file, userId);
        return {
            type: UPLOAD_SUCCESFULL
        }
    }
    
}

export function getAllMediaFromFirebase () {
    return (dispatch) => {
        mediaRef.on("value", (mediaSnapshots) => {
            return dispatch ({
                type: ALL_MEDIA,
                payload: mediaSnapshots.val()
            });
        });
    }
}

function successfullyUploaded (response) {
    return {
        type: UPLOAD_SUCCESFULL,
        payload: response
    }
}

function uploadFailed (error) {
    return {
        type: UPLOAD_FAILED,
        error: error.message
    }
}