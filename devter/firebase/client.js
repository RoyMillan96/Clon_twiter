import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD74TKnCe__AObej7iBMpqKwjlV88ZUqY0",
  authDomain: "devter-4cd7f.firebaseapp.com",
  projectId: "devter-4cd7f",
  storageBucket: "devter-4cd7f.appspot.com",
  messagingSenderId: "396304271935",
  appId: "1:396304271935:web:6cde7304ac2238c0bf468a",
  measurementId: "G-BRP9YCJEHP",
};

// Initialize Firebase
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
