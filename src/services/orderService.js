import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getOrdersFromApi = async () => {
  const response = await axios.get(`${apiUrl}/orders`);
  return response;
};

export const postOrderToApi = async (order) => {
  const response = await axios.post(`${apiUrl}/orders/order`, order);
  return response;
};

export const putOrderToApi = async (id, order) => {
  const response = await axios.put(`${apiUrl}/orders/order/${id}`, order);
  return response;
};

export const deleteOrderFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/orders/order/${id}`);
  return response;
};
