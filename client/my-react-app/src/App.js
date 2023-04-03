import { Routes, Route, json } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import { SearchResultsList } from "./components/SearchResultsList";
import { getAllBooks } from "./services/getbooks";
import Bookcase from "./components/Bookcase";
import Search from "./components/Search";
import BookCart from "./components/BookCart";
import Book from "./components/Book";
import { CreateBook } from "./components/CreateBook";
import axios from 'axios';



// GET DATA AND IMPORT


function App() {

  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);
  const [basket, setBasket] = useState([]);
  const [keyword, setKeyword] = useState("")
  const [input, setInput] = useState("");

  // function addBook(id) {
  //   console.log(`The book was clicked:` + id);
  // }
  async function findBooks(searchTerm) {
    const url = `http://localhost:3007/books?q=${searchTerm}`;

    const searchResults = await fetch(url).then((res) => res.json());
    // console.log(searchResults)
    if (!searchResults.error) {
      setBooks(searchResults);
    }
  }


  // const [result, setResult] = useState('');

  // const fetchData = async (searchTerm) => {
  //   const { data } = await axios.get(
  //     `http://localhost:3007/books?q=${searchTerm}`
  //   );

  //   return data.books;
    
  // };




  useEffect(() => {
    getAllBooks().then(json => {
      setBooks(json)
    }).then(json => {
      setKeyword(json);
      setResults(json)
    })
  }, [])

  

  // useEffect(() => {
  //   async function fetchBooks() {
  //     if (!books) {
  //       const response = await getAllBooks();
  //       setBooks(response);
  //       setResults(response)
  //     }
  //   }

  //   fetchBooks();
  // }, [books]);



 function addBookToCart(book) {
    console.log(book);
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }

  const removeBookFromCart = (id) => {
    const newItems = [];
    basket.forEach((book) => {
      if (book.id === id) {
        newItems.push(book);
      } else {
        book.inBasket = !book.inBasket;
      }
      return books;
    });

    setBasket(newItems);
  };

  console.log(books);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Container className="bookcase-Container">
              <Search
                // keyword={keyword}
                setKeyword={setKeyword}
                findBooks={findBooks}
                results={books}
                books={books}
                setResults={setResults}
                input={input}
                setInput={setInput}
                setBooks={setBooks}
              
                
                // {...books.map((book) => (
                //   <Book
                //     key={book.id}
                //     title={book.title}
                //   />
                // ))}
              />
              {books && books.length > 0
                ? books.map((book) => (
                    <Book
                      className="inline-flex"
                      removeBookFromCart={removeBookFromCart}
                      addBookToCart={addBookToCart}
                      id={book.id}
                      book={book}
                      key={book.id}
                    />
                  ))
                : "No books found"}
            </Container>
          }
        />
        <Route
          path="/Bookcase"
          element={
            <Bookcase books={basket} removeBookFromCart={removeBookFromCart} />
          }
        />
        <Route
          path="/About"
          element={
            <div>
     
    
    </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
