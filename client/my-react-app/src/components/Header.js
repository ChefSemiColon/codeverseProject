import { Link } from "react-router-dom";



export default function Header (props) {
 
    return <>
        <h1 style={{ backgroundColor: "pink" }}>BookCase App</h1>
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/Bookcase" >Book Cart</Link>
        </div>
        <div>
        <Link to="/About">About</Link>
        </div>
        </>
}