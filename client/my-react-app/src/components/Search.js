import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
  const { keyword, setKeyword, findBooks, books, setBooks} = props;
  console.log(books)
  const handleChange = (changeEvent) => {
      const bookResults = books.filter((book) =>
        book.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setBooks(bookResults);
    setKeyword(changeEvent.target.value);
    console.log("Someone Typed event =>", changeEvent);
  }

  function onSubmit (event) {
    event.preventDefault()
    findBooks(keyword)
  }
  return (

    <div>
    <form>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
        <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p>
      <input id="search_input"
        type="text"
        value={props.keyword}
        onChange={handleChange}
      />
      <input type="submit" onClick={onSubmit} />
    </form>
    
    </div>
  );
};
export default Search;