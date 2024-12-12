import Navbar from "../Navbar";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const auth = getAuth();

  const onSubmit = async (data) => {
    const { name, photoURL, email, password } = data;

    try {
   
      const result = await createUser(email, password);
      const user = result.user;

      // Update user profile with Firebase
      await updateProfile(user, {
        displayName: name,
        photoURL,
      });

      console.log("User created and profile updated:", user);

      
      const newUser = { name, email, photoURL };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const dbResult = await response.json();

      if (dbResult.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Registration successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/")
      }
    } catch (err) {
      console.error("Error during sign-up:", err);
      setError("Failed, Try again");
      Swal.fire({
        title: "Error!",
        text: "The account has been used already.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
 <div>
       <Navbar></Navbar>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              id="photoURL"
              type="text"
              {...register("photoURL", { required: "Photo URL is required" })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm">{errors.photoURL.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                validate:(value)=>{
                  const passwordRegex =
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
                  return(passwordRegex.test(value) || "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character." )
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
 </div>
  );
};

export default SignUp;


// 