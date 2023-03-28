import React from "react";

const Book = (props) => {
  const {book} = props
    return (
      <div className="inline-flex items-baseline grid-cols-2 grid-rows-2 max-w-sm rounded overflow-hidden content-evenly w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
        <ul>
        <img
          src={book.image}
          alt={book.title}
        />
          <h2>{book.title}</h2>
          <h2>{book.author}</h2>
          <p>{book.price}</p>
        </ul>
        
       {/* <button onClick={() => props.onClick(props.id)}> { props.isInTheBasket ? "Remove" : "Add +"}</button> */}
      </div>
    );
  };

  
export default Book;




