import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`http://localhost:8080/Home`);

  return response.data || [];
};


export { getAllBooks };