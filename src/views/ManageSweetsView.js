import { useEffect, useState } from "react";
import { Button, Table, Modal, FormLabel, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import {
  deleteSweetFromApi,
  getSweetsFromApi,
  putSweetToApi,
} from "../services/sweetService";

const ManageSweetsView = () => {
  const [sweets, setSweets] = useState([]);
  const [sweet, setSweet] = useState([]);
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

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

  const deleteSweet = () => {
    const filtered = sweets.filter((sweet) => {
      return id !== sweet._id;
    });
    deleteSweetFromApi(id);
    setSweets(filtered);
    setShow(false);
  };

  const handleChange = (event) => {
    setSweet({
      ...sweet,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = (id, sweet) => {
    putSweetToApi(id, sweet);
    setEditShow(false);
    window.location.reload();
  };

  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  const handleEditShow = (sweet) => {
    setSweet(sweet);
    setEditShow(true);
  };

  return (
    <>
      <div className="add-edit-sweets">
        <Button
          className="admin-menu-btn"
          href="/add-sweets"
          variant="outline-primary"
        >
          Add Desserts
        </Button>
      </div>
      <div className="table-container">
        <div className="orders-table">
          <Table>
            <thead>
              <tr>
                <th>Dessert Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {sweets &&
                sweets.map((sweet) => (
                  <>
                    <tr key={sweet._id}>
                      <td>{sweet.name}</td>
                      <td className="table-description">{sweet.description}</td>
                      <td>${sweet.price}.00</td>
                      <td className="manage-sweets-btns">
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            handleEditShow(sweet);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          className="manage-delete"
                          onClick={() => {
                            // deleteOrder(order._id, i);
                            handleShow(sweet._id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
          <>
            {/* // -------------------------------------------------Modal for editing */}
            <Modal show={editShow}>
              <Modal.Header
                closeButton
                onClick={() => {
                  setEditShow(false);
                }}
              >
                <Modal.Title>Edit Dessert</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <FormLabel>Name</FormLabel>
                  <input
                    value={sweet.name}
                    onChange={handleChange}
                    className="form-control"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                  <br />
                  <FormLabel>Description</FormLabel>
                  <textarea
                    value={sweet.description}
                    onChange={handleChange}
                    className="form-control"
                    name="description"
                    rows={5}
                    placeholder="Description..."
                  />
                  <br />
                  <FormLabel>Price</FormLabel>
                  <input
                    value={sweet.price}
                    onChange={handleChange}
                    className="form-control"
                    name="price"
                    type="text"
                    placeholder="Price"
                  />
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="success"
                  onClick={() => {
                    handleSave(sweet._id, sweet);
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setEditShow(false);
                  }}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
            {/* // -------------------------------------------------Modal for deletion */}
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
                  variant="success"
                  onClick={() => {
                    deleteSweet();
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant="outline-secondary"
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
      </div>
    </>
  );
};

export default ManageSweetsView;
