import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBquUggKZ80vwCgElTFNTp-6ANNkZ7mwdU",
    authDomain: "pratitya-ba958.firebaseapp.com",
    projectId: "pratitya-ba958",
    storageBucket: "pratitya-ba958.appspot.com",
    messagingSenderId: "1066761384201",
    appId: "1:1066761384201:web:3e190f8d8e026859cfa3d8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;


  export const createuser = async (data,user) => {
    if(!data) return
    if(!user) return
    const {name,department,semister,phn} =data
    const {uid,email} = user
    const userRef = db.doc(`users/${uid}`);
      try {
        await userRef.set({
          email: email,
          name:name,
          department:department,
          semister:semister,
          phn:phn
        });
      } catch (error) {
        console.log('Error in adding user', error);
      }

  }

