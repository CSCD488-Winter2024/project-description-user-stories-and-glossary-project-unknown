import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://donutparade-420a9-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const dbRef = ref(getDatabase());
get(child(dbRef, `Donuts/${users}/Amount`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

// const Frosted = {
//   type : "Chocolate"
// }

// console.log(Frosted.type);

