import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser, UpdateUserProfile } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validate password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      // Create user
      const result = await createUser(email, password);
      console.log("User created:", result.user);

      // Save user to database
      const newUser = { name, email, photoUrl };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Registration successful!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Update user profile
        await UpdateUserProfile({ displayName: name, photoURL: photoUrl });
        console.log("User profile updated");

        navigate("/");
      }
    } catch (err) {
      console.error("Error during sign-up:", err);
      Swal.fire({
        title: "Error!",
        text: "An error occurred during sign-up. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user);

      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL,
      };

      // Save Google user to database
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Google sign-in successful!",
          icon: "success",
          confirmButtonText: "OK",
        });

        navigate("/");
      }
    } catch (err) {
      console.error("Error during Google sign-in:", err);
      Swal.fire({
        title: "Error!",
        text: "An error occurred during Google sign-in. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo URL"
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
                  placeholder="Email"
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
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {error && <p className="text-red-500 text-base mt-2">{error}</p>}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <img
                  onClick={handleGoogle}
                  className="rounded-full cursor-pointer h-10 w-10 mx-auto"
                  src="https://i.ibb.co/vYyWjVq/images.png"
                  alt="Google Sign-In"
                />
                <p className="mt-2">
                  Already have an account?{" "}
                  <Link to="/signIn">
                    <span className="text-purple-900 font-semibold text-base">
                      Login
                    </span>
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

export default SignUp;
