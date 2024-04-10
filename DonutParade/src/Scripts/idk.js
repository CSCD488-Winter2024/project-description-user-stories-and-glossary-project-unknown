import { getDatabase, ref, onValue, get, update,child } from "firebase/database";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  databaseURL: "https://donutparade-420a9-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

const dbRef = ref(getDatabase(app));

onValue(dbRef,  (snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
});






