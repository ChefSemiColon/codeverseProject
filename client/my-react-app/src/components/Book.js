import React from "react";

const Book = (props) => {
  const { book, inBasket } = props;

  return (
    <div className="inline-flex items-baseline grid-cols-2 grid-rows-2 max-w-sm rounded overflow-hidden content-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <ul>
        <img src={book?.image} alt={book.title} height={200} />
        <h2>{book.title}</h2>
        <h2>{book.author}</h2>
        <p>{book.price}</p>
        <div className="buttons">
          {inBasket ? (
            <button
              id="add-button"
              onClick={() => props.removeBookFromCart(book)}
              className="hover:bg-white ... content-center bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {" "}
              Remove
            </button>
          ) : (
            <button
              id="add-button"
              onClick={() => props.addBookToCart(book)}
              className="hover:bg-white ... content-center bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {" "}
              Add to basket
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Book;
