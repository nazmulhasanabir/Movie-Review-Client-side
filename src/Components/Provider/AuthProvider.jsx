import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase Init/Firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);


  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password)

  };

 
  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password)
     
  };

  const logOut = () => {
    setLoader(true);
    return signOut(auth)
      .then(() => {
        setUser(null); 
      })
 
  };
  const UpdateUserProfile = (updateData) => {
    console.log(updateData)
    return updateProfile(auth.currentUser, updateData);
  };



  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
      setLoader(false); 
    });

   
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    setUser,
    loader,
    createUser,
    signInUser,
    logOut,
    UpdateUserProfile
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
