import React from "react";
import { getAllBooks } from "../services/getbooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


    const Search = ({setResults}) => {
     const [input, setIinput] = useState('');

     const fetchData = (value) => {
      fetch('http://localhost:3007/books').then((response) => response.json())
      .then((json) => {
        const results = json.filter((book) => {
          return (
            value &&
            book &&
            book.author &&
            book.author.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
     }

     const handleChange = (value) => {
      setIinput(value);
      fetchData(value);
     }
      
        return (
          <header>
          <form className="search">
            <div>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
            <input className="search__input"
              type="text"
              id="search"
               value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search catalogue"
            />
            </div>
          </form>
          </header>
        );
      };


export default Search;