import firebase from 'firebase';
const config={
    apiKey: "AIzaSyATxJMwj57OcDJWku9zfK0ACs5oYXTHwD0",
    authDomain: "reactnative-test-a3d44.firebaseapp.com",
    databaseURL: "https://reactnative-test-a3d44.firebaseio.com",
    projectId: "reactnative-test-a3d44",
    storageBucket: "",
    messagingSenderId: "217503698558",
    appId: "1:217503698558:web:c0fc1e87e369b0f5"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;