import { useState, useEffect } from "react";
import { getCategoriesFromApi } from "../services/categoryService";
import { postOrderToApi } from "../services/orderService";
import "../App.css";
import { Form, FormLabel } from "react-bootstrap";

const PlaceOrderView = () => {
  const [categories, setCategories] = useState([]);
  const [order, setOrder] = useState({
    name: "",
    phone: "",
    category: "",
    description: "",
    img: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await getCategoriesFromApi();
    setCategories(response.data);
  };

  const handleChange = (event) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (order.name !== "" || order.phone !== "") {
      postOrderToApi(order);
      setOrder({
        name: "",
        phone: "",
        category: event.target.value,
        description: "",
        img: "",
      });
      alert("Your order has been submitted!");
      window.location.reload();
    } else {
      alert("Name is required.");
    }
  };

  return (
    <div key={order._id} className="container mt-5">
      <Form className="orderForm">
        <h2>Place Order</h2>
        <FormLabel>Name</FormLabel>
        <input
          value={order.name}
          onChange={handleChange}
          className="form-control"
          name="name"
          type="text"
          placeholder="name"
        />
        <br />
        <FormLabel>Phone Number</FormLabel>
        <input
          value={order.phone}
          onChange={handleChange}
          className="form-control"
          name="phone"
          type="text"
          placeholder="Phone Number"
        />
        <br />
        <FormLabel>Details</FormLabel>
        <textarea
          value={order.description}
          onChange={handleChange}
          className="form-control"
          name="description"
          rows={5}
          placeholder="Order details..."
        />
        {/* <input
          value={order.img}
          onChange={handleChange}
          className="form-control"
          name="img"
          type="file"
          placeholder="image"
        /> */}
        <br />
        <FormLabel>Category</FormLabel>
        <select
          onChange={handleChange}
          name="category"
          className="form-control"
        >
          <option selected disabled>
            {" "}
            select category
          </option>
          {categories &&
            categories.map((category) => (
              <option value={category._id}>{category.name}</option>
            ))}
        </select>
        <button onClick={handleSubmit} className="btn btn-outline-primary">
          Place Order
        </button>
      </Form>
    </div>
  );
};

export default PlaceOrderView;
