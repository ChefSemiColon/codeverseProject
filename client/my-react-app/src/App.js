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
import { CreateBook } from "./components/CreateBook";

// GET DATA AND IMPORT


function App() {

  const [books, setBooks] = useState();
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
      setKeyword(json)
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
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }
  console.log(books);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index
          path="/"
          element={<Container className="bookcase-Container">
            <div>
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                findBooks={findBooks}
              />
              {/* {results && results.length > 0 && <SearchResultsList results={results} />} */}
            </div>
            <Bookcase books={books} />
          </Container>}>
        </Route>
        <Route
          path="/Bookcase"
          element={<Bookcase
            books={books} />}
        />
        {/* <Route path='/create-book' element={<CreateBook />} /> */}
        <Route path="/About" element={<h1> About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
