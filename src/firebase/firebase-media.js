import firebase from 'firebase';
const storageUrl = 'media/';
const fbdatabase = firebase.database();
const mediaRef = fbdatabase.ref('media');
export function uploadMedia (file, userId) {
    const fileName = file.name;
    const storageRef = firebase.storage().ref(`${storageUrl}/${fileName}`);
    storageRef.put(file).then(async snapshot => {
        const uploadedURL = await snapshot.ref.getDownloadURL();
        await addMediaRef({ 'mediaURL': uploadedURL, 'userId': userId });

    }).catch (err => {
        console.log(err)
       return err;
    });
}

export function getAllMedia () {
    return new Promise ((resolve, reject) => {
        mediaRef.on("value", (mediaSnapshots) => {
            console.log('i am fired ', mediaSnapshots.val())
            return resolve (mediaSnapshots.val());
        });
    });
    
}

function addMediaRef (mediaObject) {
    return mediaRef.push(mediaObject);
}