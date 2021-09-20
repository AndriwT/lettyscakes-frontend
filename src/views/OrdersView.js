import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import {
  getOrdersFromApi,
  deleteOrderFromApi,
  // putOrderToApi,
} from "../services/orderService";

const OrdersView = () => {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleShow = (id) => {
    setId(id);
    setShow(true);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const response = await getOrdersFromApi();
      setOrders(response.data);
    } catch (error) {
      console.log("Orders couldn't be retrieved, please check server");
    }
  };

  const deleteOrder = () => {
    const filtered = orders.filter((order) => {
      return id !== order._id;
    });
    deleteOrderFromApi(id);
    setOrders(filtered);
    setShow(false);
  };

  // const markCompleted = (id, order) => {
  //   order.completion = true;
  //   putOrderToApi(id, order);
  //   window.location.reload();
  //   if (order.completion === true) {
  //     order.completion.value = "Completed";
  //   } else {
  //     order.completion.value = "Incomplete";
  //   }
  // };

  return (
    <div className="table-container">
      <div className="orders-table">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Description</th>
              {/* <th>Category</th> */}
              <th>Date</th>
              {/* <th>Complete</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <>
                  <tr key={order._id}>
                    <td>{order.name}</td>
                    <td>{order.phone}</td>
                    <td className="table-description">{order.description}</td>
                    {/* <td>{order.category.name}</td> */}
                    <td>{new Date(order.date).toLocaleDateString("en-GB")}</td>
                    {/* <td>
                      <input
                        type="checkbox"
                        onClick={() => {
                          markCompleted(order._id, order);
                        }}
                      />
                      <p>{order.completion.value}</p>
                    </td> */}
                    <td>
                      <Button
                        className="manage-delete"
                        onClick={() => {
                          handleShow(order._id);
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
          <Modal show={show}>
            <Modal.Header
              closeButton
              onClick={() => {
                setShow(false);
              }}
            >
              <Modal.Title>
                Are you sure you want to delete this order?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Once you click "yes" you won't be able to retrieve it back.
            </Modal.Body>
            <Modal.Footer>
              <Button
                className="confirm-button"
                onClick={() => {
                  deleteOrder();
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
    </div>
  );
};

export default OrdersView;
