import React from "react";
import Book from "./Book";

export default function Bookcase({ books, keyword }) {
    
    return (
      <div>
        {books && books.length > 0 ? (
          <div>
            {books.map((book) => (
              <Book book={book} key={book.id} isInTheBasket={true} />
            ))}
          </div>
        ) : (
          <h1>No books yet</h1>
        )}
      </div>
    );
  }