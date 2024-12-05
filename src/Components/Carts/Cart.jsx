const Cart =  ({ movie = {} }) => {
    const { posterUrl, title, release, genre, summary, rating } = movie
    console.log(movie);
  return (
    <div>
        
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={posterUrl}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">
            {summary}
            </p>
            <p className="py-6">
                {rating}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
