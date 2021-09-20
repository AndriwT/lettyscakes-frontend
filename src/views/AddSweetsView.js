import { useEffect, useState } from "react";
import { Button, Form, FormLabel, Modal } from "react-bootstrap";
import {
  postSweetToApi,
  getSweetsFromApi,
  deleteSweetFromApi,
} from "../services/sweetService";

const AddSweetsView = () => {
  const [show, setShow] = useState(false);
  const [sweets, setSweets] = useState([]);
  const [id, setId] = useState("");
  const [sweet, setSweet] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    getSweets();
  }, []);

  const getSweets = async () => {
    try {
      const response = await getSweetsFromApi();
      setSweets(response.data);
    } catch (error) {
      console.log("Server not working");
    }
  };

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

  const deleteSweet = () => {
    const filtered = sweets.filter((sweet) => {
      return id !== sweet._id;
    });
    deleteSweetFromApi(id);
    setSweets(filtered);
    setShow(false);
  };

  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  return (
    <div className="container mt-5">
      <Form className="orderForm">
        <h2>New Dessert</h2>
        <FormLabel>Dessert Name</FormLabel>
        <input
          value={sweet.name}
          onChange={handleChange}
          className="form-control"
          name="name"
          type="text"
        />
        <br />
        <FormLabel>Description</FormLabel>
        <textarea
          value={sweet.description}
          onChange={handleChange}
          className="form-control"
          name="description"
          rows={5}
          placeholder="Dessert Description..."
        />
        <br />
        <FormLabel>Price</FormLabel>
        <input
          value={sweet.price}
          onChange={handleChange}
          className="form-control"
          name="price"
          type="text"
        />
        <br />
        <FormLabel>Display Image</FormLabel>
        <input
          value={sweet.image}
          onChange={handleChange}
          className="form-control"
          name="image"
          type="file"
          placeholder="Image"
        />
        <Button onClick={handleSubmit} className="custom-button">
          Add Dessert
        </Button>
      </Form>
      <div className="delete-sweets">
        <h4 className="delete-sweets-ul-h4">Current List of Desserts</h4>
        <ul className="delete-sweets-ul">
          {sweets &&
            sweets.map((sweet) => (
              <>
                <li>
                  <Button
                    className="manage-delete-sml"
                    size="sm"
                    onClick={() => {
                      handleShow(sweet._id);
                    }}
                  >
                    X
                  </Button>
                  {sweet.name}
                </li>
                <hr />
              </>
            ))}
          <Button className="custom-button" href="/edit-sweets">
            Manage Desserts
          </Button>
        </ul>
      </div>
      <>
        <Modal show={show}>
          <Modal.Header
            closeButton
            onClick={() => {
              setShow(false);
            }}
          >
            <Modal.Title>
              Are you sure you want to delete this dessert?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Once you click "yes" you won't be able to retrieve it back.
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="confirm-button"
              onClick={() => {
                deleteSweet();
              }}
            >
              Yes
            </Button>
            <Button
              className="cancel-button"
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddSweetsView;
