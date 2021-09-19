import { useEffect, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { deleteSweetFromApi, getSweetsFromApi } from "../services/sweetService";

const ManageSweetsView = () => {
  const [sweets, setSweets] = useState([]);
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

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

  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  return (
    <div className="table-container">
      <div className="orders-table">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sweets &&
              sweets.map((sweet) => (
                <>
                  <tr key={sweet._id}>
                    <td>{sweet.name}</td>
                    <td className="table-description">{sweet.description}</td>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        // deleteOrder(order._id, i);
                        handleShow(sweet._id);
                      }}
                    >
                      Delete
                    </Button>
                  </tr>
                </>
              ))}
          </tbody>
        </Table>
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
                variant="success"
                onClick={() => {
                  deleteSweet();
                }}
              >
                Yes
              </Button>
              <Button
                variant="danger"
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
  );
};

export default ManageSweetsView;
