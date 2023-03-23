import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route index
          path="/Home"
          element={<Container className="bookcase-Container">
           <h1>BookCase</h1>
          </Container>}></Route>
    </Routes>
    </div>
  );
}

export default App;
