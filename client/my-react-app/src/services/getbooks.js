import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`http://localhost:3000/books`);

  return response.data || [];
};


export { getAllBooks };