import React, { useContext } from "react";
import Navbar from "../Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext) 

    const handleSignIn = e => {
        e.preventDefault()
        const  name = e.target.email.value;
        const  password = e.target.password.value;
        console.log(name,password);
        signInUser(name , password)
        .then(resp =>  {
            console.log(resp.user )
        })
        .catch(error => {
            console.log(error);
        })

    }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="mt-2 text-center ">
                New here? Create an account and join us today!
                <Link to={"/signUp"}>
                  <button className="text-purple-900 font-semibold text-base">
                    Register
                  </button>
                </Link>
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
