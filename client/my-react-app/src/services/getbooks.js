import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`http://localhost:3007/allbooks`);

  return response.data || [];
};


export { getAllBooks };