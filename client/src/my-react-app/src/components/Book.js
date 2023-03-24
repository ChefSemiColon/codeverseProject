import React from "react";

const Book = (props) => {
    console.log(props);
  const {book} = props
    return (
      <div>
        <ul>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </ul>
        <button onClick={() => props.onClick(props.id)}> { props.isInTheBasket ? "Remove" : "Add +"}</button>
      </div>
    );
  };

  
export default Book;




