import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

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

// inicializar el servicio de firestore para guardar info
const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid
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

// guardar info en BD de firestore 
export const addDevit = ({ avatar, content, img, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    img,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

// Lista de devits en la bd de firebase
export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        }
      })
    })
}

// guardar una imagen en firestorage
export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}