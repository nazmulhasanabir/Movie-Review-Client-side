import React from 'react';
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';
// import { AuthContext } from "../Providers/AuthProvider";
// import loader from "../assets/others/loader3.gif"
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoutes;