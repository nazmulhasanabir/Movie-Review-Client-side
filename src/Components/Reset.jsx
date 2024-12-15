import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { useRef } from "react";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

const Reset = () => {
  const emailRef = useRef();
  const auth = getAuth();

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (email) {
      sendPasswordResetEmail(auth, email).then(() => {
        Swal.fire({
          title: "Success!",
          text: "cheack mail",
          icon: "success",
          confirmButtonText: "Success!",
        })
      });
    } else    Swal.fire({
      title: "Success!",
      text: "",
      icon: "success",
      confirmButtonText: "Success!",
    });
  };

  return (
   <div>
    <Navbar></Navbar>
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
