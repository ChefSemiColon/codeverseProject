import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

    const Search = (props) => {
        const { keyword, books, setKeyword} = props;
      
        const handleChange = (e) => {
          if(!e.target.value) return setKeyword(books)

          const resultsArr = books.filter(book => book.title.includes(e.target.value) || 
          book.author.includes(e.target.value))

          setKeyword(resultsArr)
        }
       
        const handleSubmit = (e) => {
          e.preventDefault()
        }
      
        return (
          <header>
          <form className="search" onSubmit={handleSubmit}>
              {/* <p style={{ color: "red" }}>
              <em>{keyword && "Keywords Typed: " + keyword}</em>
            </p> */}
            <input className="search__input"
              type="text"
              id="search"
              //  value={props.keyword}
              onChange={handleChange}
              placeholder="Search catalogue"
            />
            <button className="search_button">
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
          </form>
          </header>
        );
      };


export default Search;