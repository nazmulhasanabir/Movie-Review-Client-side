import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, user } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("open", email, password, name, photoUrl);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const newUser = { name, email, photoUrl };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to db ", data);
            if (data.insertedId) {
              Swal.fire({
                title: " Success!",
                text: "Registration Successfull",
                icon: "success",
                confirmButtonText: "Success!",
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="textl"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text "
                  name="photoUrl"
                  placeholder="photoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
                <p className="mt-2">
                Hey there! Got an account?{" "}
                <Link to={"/signIn"}>
                  {" "}
                  <span className="text-purple-900 font-semibold text-base">
                    Login
                  </span>{" "}
                </Link>{" "}
                in to continue!
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
