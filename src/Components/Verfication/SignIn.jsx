import React, { useContext } from "react";
import Navbar from "../Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase Init/Firebase.init";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.email.value;
    const password = e.target.password.value;

    signInUser(name, password)
      .then((resp) => {
        console.log("User signed in:", resp.user);
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Invalid credentials. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google sign-in successful:", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Google sign-in error:", error.message);
        Swal.fire({
          title: "Error!",
          text: "Google sign-in failed. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  bg-[url('https://i.ibb.co.com/wBq15Dg/system-bars-hero.png')] bg-cover w-full max-w-sm shrink-0 shadow-2xl">
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
                <a href={"/reset"} className="label-text-alt link link-hover">
                Forgot password?
              </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <img
                  onClick={handleGoogle}
                  className="rounded-full cursor-pointer h-10 w-10 mx-auto"
                  src={"https://i.ibb.co.com/vYyWjVq/images.png"}
                  alt="Google Sign-In"
                />
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
