import { Link } from "react-router-dom";
import RatingReview from "../Private route/Rating";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Cart = ({ movie = {} }) => {
  const { user } = useContext(AuthContext);
  const convertMinutes = (minute) => {
    const hour = Math.floor(minute / 60);
    const min = minute % 60;
    return `${hour} hours ${min} min`;
  };
  const { _id, posterUrl, title, release, duration, genre, rating } = movie;

  return (
    <div>
      <div className="hero-content flex-col lg:flex-row rounded-xl mx-2 my-2  bg-red-200  dark:bg-gradient-to-br from-purple-900 via-black to-black text-white">
        <div className="  ">
          <div>
            <img src={posterUrl} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="w-9/12 mx-auto text-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="">{release}</p>
            <div className="flex items-center gap-2 ">
              <img
                className="w-4"
                src="https://img.icons8.com/?size=100&id=10058&format=png&color=FFFFFF"
              />
              <p className="">{convertMinutes(duration)}</p>
            </div>
            <p className="">
              <RatingReview rating={rating}></RatingReview>{" "}
            </p>
            <p className="">{genre}</p>
            {user && user?.email ? (
              <Link to={`/addedMovie/${_id}`}>
                <button className="btn btn-primary">See Details</button>
              </Link>
            ) : (
              <Link to={"/signIn"}>
                <button className="btn btn-primary">See Details</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
