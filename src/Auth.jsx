import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const Auth = () => {
    return (
        <div>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Auth;