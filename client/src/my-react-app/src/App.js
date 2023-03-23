import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route index
          path="/Home"
          element={<h1>Bookcase</h1>}></Route>
    </Routes>
    </div>
  );
}

export default App;
