import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

export const firebaseConfig = {
	apiKey: "AIzaSyD0K5hvOSQ-PmPcTfvbVJm0RGru-i5RdRI",
	authDomain: "farm-grant.firebaseapp.com",
	databaseURL: "https://farm-grant.firebaseio.com",
	projectId: "farm-grant",
	storageBucket: "farm-grant.appspot.com",
	messagingSenderId: "958697272694",
	appId: "1:958697272694:web:7d233e5d12ce9481",
    timestampsInSnapshots: true,
};
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots:true});
