import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";

import Book from "./components/Book";
import Bookcase from "./components/Bookcase";
import Search from "./components/Search";
// GET DATA AND IMPORT


function App() {

  const [books, setBooks] = useState();
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);

  function addBook(id) {
    console.log(`The book was clicked:` + id);
  }


  async function findBooks(value) {
    const url = `localhost8080:/home`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }
  function addBookToCart(book) {
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route index
          path="/Home"
          element={<Container className="bookcase-Container">
            <Search
                keyword={keyword}
                setKeyword={setKeyword}
                findBooks={findBooks}
              />
              {/* MAP BOOKS  and add Book Component*/}
          </Container>}>
          </Route>
          <Route
          path="/Bookcase"
          element={<Bookcase />}
        />
        <Route path="/About" element={<h1> About</h1>} />
    </Routes>
    </div>
  );
}

export default App;
