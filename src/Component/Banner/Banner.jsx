import React from "react";
import image from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-10 rounded-2xl ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={image}
          className="w-full md:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold my-10">Books to freshen up <br /> your bookself</h1>
          <button className="btn btn-primary">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
