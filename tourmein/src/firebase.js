import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

let db = firebase.firestore();

//export default firebase;
export { firebase, db };
