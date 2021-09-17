import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getCategoriesFromApi = async () => {
  const response = await axios.get(`${apiUrl}/categories`);
  return response;
};
