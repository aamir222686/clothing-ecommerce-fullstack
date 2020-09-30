import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyANy2UJ_FxsYQ2zbd6WwDp8F5Dm2orljtY",
    authDomain: "ecom-db-59c4e.firebaseapp.com",
    databaseURL: "https://ecom-db-59c4e.firebaseio.com",
    projectId: "ecom-db-59c4e",
    storageBucket: "ecom-db-59c4e.appspot.com",
    messagingSenderId: "469807866587",
    appId: "1:469807866587:web:2cdfd5d6e11447eb50e2fe"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;