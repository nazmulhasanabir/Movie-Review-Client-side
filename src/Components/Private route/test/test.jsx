// // export default AuthProvider;
// import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// import React, { createContext, useState, useEffect } from "react";
// import { auth } from "../../Firebase Init/Firebase.init";

// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loader, setLoader] = useState(true);

//   // Create a user (Sign up)
//   const createUser = (email, password) => {
//     setLoader(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Sign out user
//   const logOut = () => {
//     setLoader(true);
//     return signOut(auth);
//   };

//   // Listen for authentication state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser); // Update the `user` state with the current logged-in user
//       setLoader(false); // Stop the loader after fetching the user state
//     });

//     // Cleanup the subscription on unmount
//     return () => unsubscribe();
//   }, []);

//   const userInfo = {
//     user, // The currently logged-in user
//     loader, // Indicates whether authentication operations are ongoing
//     createUser, // Function to create a user
//     logOut, // Function to log out the user
//   };

//   return (
//     <AuthContext.Provider value={userInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out"))
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <nav>
      {user ? (
        <div>
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
};

export default Navbar;
