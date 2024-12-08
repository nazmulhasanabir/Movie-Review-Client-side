import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Components/Provider/AuthProvider";
import Navbar from "./Components/Navbar";

const Fvrt = () => {
  const { user } = useContext(AuthContext);
  const [favorite, setFavorites] = useState();
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/fvrtMovie/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
        })
        .catch((error) => {
          console.error("Failed to fetch favorites:", error);
        });
    }
  }, [user?.email]);
  console.log(favorite);
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-black">
      <Navbar></Navbar>
      
    </div>
  );
};

export default Fvrt;
