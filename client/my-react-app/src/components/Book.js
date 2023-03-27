import React from "react";

const Book = (props) => {
  const {book} = props
    return (
      <div>
        <ul>
          <h2>{book.title}</h2>
          <h2>{book.author}</h2>
          <p>{book.price}</p>
        </ul>
        <button onClick={() => props.onClick(props.id)}> { props.isInTheBasket ? "Remove" : "Add +"}</button>
      </div>
    );
  };

  
export default Book;




