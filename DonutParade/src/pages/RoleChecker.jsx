import { getDatabase, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';
import { db } from '../scripts/FBconfig.js'; 

const RoleChecker = ({ userId }) => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRef = ref(db, `users/${userId}`);


    onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        console.log(userData.role);
      if (userData && userData.role) {
        setRole(userData.role); 
      }
    });


    return () => {
     
      onValue(userRef, () => {});
        

    };
  }, [userId]); 



return (
    <div>
        {role === 'admin' ? (
            <p>User is an admin</p>
        ) : (
            <p>User is not an admin</p>
        )}
    </div>
);
};

export default RoleChecker;
