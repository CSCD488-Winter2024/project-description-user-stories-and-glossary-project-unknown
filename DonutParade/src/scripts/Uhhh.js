import { getDatabase, ref, onValue, get, update,child } from "firebase/database";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  databaseURL: "https://donutparade-420a9-default-rtdb.firebaseio.com/",
};


const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase(app));


  onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      var data = snapshot.child("Donuts/Apple_fritter").val();
      console.log(data);
      //console.log(snapshot.val(1).length);
      
    } else {
      console.log("No data available");
    }
  });



// fetchDataFromDatabase("path/to/database");
// function fetchDataFromDatabase() {
//   onValue(dbRef, (snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   });
// }

// const newData = {
//   Donuts: {
//     Apple_fritter: {
//       name: "Apple Fritter",
//       price: 2.99,
//       quantity: 10,
//       description : "yeah",
//     }
//   }
// };

// update(ref(getDatabase(app)), newData)
//   .then(() => {
//     console.log("Data written to the database successfully");
//   })
//   .catch((error) => {
//     console.error("Error writing data to the database:", error);
//   });

  
  






