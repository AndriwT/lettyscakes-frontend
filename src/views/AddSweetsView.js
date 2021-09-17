import { useState } from "react";
import { postSweetToApi } from "../services/sweetService";

const AddSweetsView = () => {
  const [sweet, setSweet] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (event) => {
    setSweet({
      ...sweet,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postSweetToApi(sweet);
    setSweet({
      name: "",
      description: "",
      price: "",
    });
    alert("Sweet Added Successfully!");
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <form className="orderForm">
        <h2>New Sweet</h2>
        <input
          value={sweet.name}
          onChange={handleChange}
          className="form-control"
          name="name"
          type="text"
          placeholder="Name"
        />
        <textarea
          value={sweet.description}
          onChange={handleChange}
          className="form-control"
          name="description"
          rows={5}
          placeholder="Description..."
        />
        <input
          value={sweet.price}
          onChange={handleChange}
          className="form-control"
          name="price"
          type="text"
          placeholder="Price"
        />
        <input
          value={sweet.image}
          onChange={handleChange}
          className="form-control"
          name="image"
          type="file"
          placeholder="Image"
        />
        <button onClick={handleSubmit} className="btn btn-outline-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddSweetsView;
