import { auth, onAuthStateChanged } from './FBconfig.js';

const listenToAuthState = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in.
      const uid = user.uid;
      console.log('User UID:', uid);
      // Perform actions with UID as needed
    } else {
      // No user is signed in.
      console.log('No user signed in.');
    }
  });
};

export default listenToAuthState;