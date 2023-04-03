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

// GET DATA AND IMPORT


function App() {

  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);
  const [basket, setBasket] = useState([]);
  const [keyword, setKeyword] = useState("")

  // function addBook(id) {
  //   console.log(`The book was clicked:` + id);
  // }
  async function findBooks(searchTerm) {
    const url = `http://localhost:8080/books/search/?q=${searchTerm}`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }


  useEffect(() => {
    getAllBooks().then(json => {
      setBooks(json)
    }).then(json => {
      setKeyword(json);
      setResults(json)
    })
  }, [])

  //   function getFetchUsers() {
  //     this.setState({
  //         loading: true
  //     }, () => {
  //         fetch("http://localhost:3004/db.json").then(res => res.json()).then(result => this.setState({
  //             loading: false,
  //             users: result
  //         })).catch(console.log);
  //     });

  // }
  useEffect(() => {
    async function fetchBooks() {
      if (!books) {
        const response = await getAllBooks();
        setBooks(response);

      }
    }

    fetchBooks();
  }, [books]);



 function addBookToCart(book) {
    console.log(book);
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }

  const removeBookFromCart = (id) => {
    const newItems = [];
    basket.forEach((books) => {
      if (books.id === id) {
        newItems.push(books);
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
                keyword={keyword}
                setKeyword={setKeyword}
                findBooks={findBooks}
                books={books}
              
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
            <div className="">
            <h3 className="font-medium text-center text-lg">
              Welcome to BookScope! <br/> In this application you can browse for books
              in the catalogue or search for books in the search bar. If you
              like a book, add it to the cart. If you change your mind, simply
              remove the item from the basket. If you would like more
              information on a book, click on more information. There you will
              see a description of the book.
            </h3>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
