const Cart =  ({ movie = {} }) => {
    const { posterUrl, title, release, genre,rating } = movie
    console.log(movie);
  return (
    <div>
        
      <div className="hero-content flex-col lg:flex-row">
        <div className="  ">
          <div>
            
          <img
            src={posterUrl}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          </div>
          <div className="w-9/12 mx-auto text-center">
            <h1 className="text-5xl font-bold">{title}</h1>
           
            <p className="py-6">
                {release}
            </p>
            <p className="py-6">
                {rating}
            </p>
            <p className="py-6">
                {genre}
            </p>
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
