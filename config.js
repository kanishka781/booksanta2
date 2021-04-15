import firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyDbmvCAJVMDeUizf8D_GckML-dcD8las54",
    authDomain: "booksanta-36fce.firebaseapp.com",
    projectId: "booksanta-36fce",
    storageBucket: "booksanta-36fce.appspot.com",
    messagingSenderId: "549652912276",
    appId: "1:549652912276:web:00e65a138ee3793b01bc81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore