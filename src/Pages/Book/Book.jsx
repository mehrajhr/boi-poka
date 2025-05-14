import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const {
    image,
    bookName,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100  shadow-sm">
        <figure className="p-5 h-52 bg-base-200 m-5 rounded-2xl">
          <img className="h-full w-32" src={image} alt="Shoes" />
        </figure>
        <div className="card-body gap-3">
          <div className="flex justify-center gap-10">
            {tags.map((tag) => (
              <button className="text-orange-600">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Publisher By : {publisher}</p>
          <div
            className="border-t border-dashed
        "
          ></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt></FaStarHalfAlt>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
