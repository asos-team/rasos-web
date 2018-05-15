import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAnIFOLe10wuZD9OBt8Ri948bsPV9ZgdJA",
  authDomain: "rasos-c79d3.firebaseapp.com",
  databaseURL: "https://rasos-c79d3.firebaseio.com",
  projectId: "rasos-c79d3",
  storageBucket: "rasos-c79d3.appspot.com",
  messagingSenderId: "557238294746"
};
var fire = firebase.initializeApp(config);
export default fire;