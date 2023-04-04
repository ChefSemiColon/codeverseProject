import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Search = (props) => {
  const { keyword, findBooks, books, results, input, setInput } = props;

  // console.log(books)

  const handleChange = (changeEvent) => {
    const setResults = () =>
      results.filter((result) =>
        result.title.toLowerCase().includes(input.toLowerCase())
      );
    setResults(results);
    setInput(changeEvent.target.value);
    console.log("Someone Typed event =>", changeEvent);
  };
  // console.log(results)
  function onSubmit(event) {
    event.preventDefault();
    findBooks(input);
  }

  return (
    <div>
      <form>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <p style={{ color: "red" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
        <input
          id="search_input"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
