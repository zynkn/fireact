import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyBsya0z5xuYVWJ1jR9KnF584YW3XZNjkeM",
  authDomain: "fireact-b8dc7.firebaseapp.com",
  databaseURL: "https://fireact-b8dc7.firebaseio.com",
  projectId: "fireact-b8dc7",
  storageBucket: "fireact-b8dc7.appspot.com",
  messagingSenderId: "825868651410"
};
const fire = firebase.initializeApp(config);

export default fire;