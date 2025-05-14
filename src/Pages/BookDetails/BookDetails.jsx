import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStarHalfAlt } from "react-icons/fa";
import { addToStoreDB } from "../../Utitlity/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === bookId);
  console.log(singleData);
  const {
    image,
    bookName,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    review,
  } = singleData;

  const hadleMarkasRead = id => {
    addToStoreDB(id);
  }

  return (
    <div>
      <div className="card bg-base-100  shadow-sm md:flex-row md:gap-32 items-center">
        <figure className="p-5  bg-base-200 m-5 rounded-2xl">
          <img className="h-full w-5xl" src={image} alt="Shoes" />
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
          <p>Review : {review}</p>
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
      <div className="my-10 flex gap-20">
        <button onClick={() => hadleMarkasRead(bookId)} className="btn btn-primary">Mark as read</button>
        <button className="btn btn-secondary">Add to wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
