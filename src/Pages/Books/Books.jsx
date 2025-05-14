import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-5">Books</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
