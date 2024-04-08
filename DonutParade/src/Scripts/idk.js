// import { getDatabase, ref, child, get } from "firebase/database";

// const dbRef = ref(getDatabase());
// get(child(dbRef, `Donut/${Frosted}/Amount`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });
const Frosted = {
  type : "Chocolate"
}

console.log(Frosted.type);

