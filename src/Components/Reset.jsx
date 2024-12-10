import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { useRef } from "react";

import React from 'react';
import Swal from "sweetalert2";
import { auth } from "../Firebase Init/Firebase.init";

const Reset = () => {
    const emailRef = useRef();
    const autho = getAuth(auth);
  
    const handleReset = (e) => {
      e.preventDefault();
      const email = emailRef.current.value;
  
      if (email) {
        sendPasswordResetEmail(autho , email).then(() => {
          Swal.fire("cheack your mail");
        });
      } else Swal.fire("provide a valid email");
    };
    return (
        <div>



    <div className="h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-xl text-center mt-4">Reset Your Password</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleReset}
              type="submit"
              className="btn btn-primary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
          </div>
    );
};

export default Reset;