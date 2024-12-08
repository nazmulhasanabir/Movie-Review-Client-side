import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase Init/Firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // Function to create a new user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoader(false)); // Ensure loader is reset
  };

  // Function to sign in an existing user
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoader(false)); // Ensure loader is reset
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth)
      .then(() => {
        setUser(null); // Clear user state on successful logout
      })
      .finally(() => setLoader(false)); // Stop the loader
  };

  // Watch for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the logged-in user
      setLoader(false); // Stop the loader
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loader,
    createUser,
    signInUser,
    logOut
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
