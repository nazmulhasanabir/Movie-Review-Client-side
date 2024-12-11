import React from 'react';
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';
// import { AuthContext } from "../Providers/AuthProvider";
// import loader from "../assets/others/loader3.gif"
const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();
    if (loader) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user && user.email) {
        return children;
    }
    return <Navigate to="/auth/signIn" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoutes;