import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getSweetsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/sweets`);
  return response;
};

export const postSweetToApi = async (sweet) => {
  const response = await axios.post(`${apiUrl}/sweets/sweet`, sweet);
  return response;
};

export const putSweetToApi = async (id, sweet) => {
  const response = await axios.put(`${apiUrl}/sweets/sweet/${id}`, sweet);
  return response;
};

export const deleteSweetFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/sweets/sweet/${id}`);
  return response;
};
