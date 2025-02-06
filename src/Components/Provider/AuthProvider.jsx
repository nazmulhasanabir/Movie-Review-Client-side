import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase Init/Firebase.init";
import axios from "axios";

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
      console.log('state capture', currentUser);
       if(currentUser?.email){
        const user = {email: currentUser.email}
        axios.post('http://localhost:5000/jwt', user, {withCredentials:true })
        .then(res => {
          console.log('login token',res.data)
                      setLoader(false)
        } 
      )
       }else{
        axios.post('http://localhost:5000/logout', {},{
          withCredentials:true})
          .then(res => {
            console.log('logout', res.data)
            setLoader(false)
          }
          )
       }
      // setLoader(false); 
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
