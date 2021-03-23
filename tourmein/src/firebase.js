import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
	apiKey: 'AIzaSyCjUx_DUVwWzl-w4UoeFtOMyLT2N6OiHds',
	authDomain: 'tourmein-43971.firebaseapp.com',
	projectId: 'tourmein-43971',
	storageBucket: 'tourmein-43971.appspot.com',
	messagingSenderId: '927852327977',
	appId: '1:927852327977:web:6fad686b153e6c57f9d838',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//! omogucjue da ne moraju sva polja biti popunjena za save
firebase.firestore().settings({
	ignoreUndefinedProperties: true,
});

let db = firebase.firestore();
let storage = firebase.storage();

//export default firebase;
export { firebase, db, storage };
