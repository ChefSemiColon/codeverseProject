import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import { getAllBooks } from "./services/getbooks";
import Book from "./components/Book";
import Bookcase from "./components/Bookcase";
import Search from "./components/Search";
// GET DATA AND IMPORT


function App() {

  const [books, setBooks] = useState();
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);

  // function addBook(id) {
  //   console.log(`The book was clicked:` + id);
  // }

  function getFetchUsers() {
    this.setState({
        loading: true
    }, () => {
        fetch("http://localhost:3004/db.json").then(res => res.json()).then(result => this.setState({
            loading: false,
            users: result
        })).catch(console.log);
    });
    
}
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
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }
  console.log(books);
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route index
          path="/"
          element={<Container className="bookcase-Container">
            <Search
                keyword={keyword}
                setKeyword={setKeyword}
                // findBooks={findBooks}
              />
           <Bookcase books={books}/>
          </Container>}>
          </Route>
          <Route
          path="/Bookcase"
          element={<Bookcase 
          books={books}/>}
        />
        <Route path="/About" element={<h1> About</h1>} />
    </Routes>
    </div>
  );
}

export default App;
