import { Link } from "react-router-dom";
//  import Search from "./Search";

export default function Header(props) {
  return (
   <>
    <nav className=" navbar navbar-expand-sm bg-secondary ">
      <ul  class="nav justify-content-end nav-pills">
      <h1
        // style={{ backgroundColor: "#4297A0" }}
        className="text-amber-500 text-4xl"
      >
        BookShelf
      </h1>
      <li className="nav-item">
        <Link className="nav-link link-dark font-bold" to="/Authentication">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link link-dark font-extrabold" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link link-dark" to="/Bookcase">Book Cart</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link link-dark" to="/About">About</Link>
      </li>
      </ul>
    </nav>
    </>
  );
}
