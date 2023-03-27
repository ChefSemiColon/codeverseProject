import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`http://localhost:3000/home`);

  return response.data || [];
};


export { getAllBooks };