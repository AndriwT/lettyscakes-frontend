import { Button } from "react-bootstrap";

const AdminView = () => {
  return (
    <div className="admin-container">
      <div className="admin-menu">
        <h4>Administration</h4>
      </div>
      <div className="admin-menu-btns">
        <Button
          className="admin-menu-btn"
          href="/orders"
          variant="outline-primary"
        >
          View Orders
        </Button>
        <Button
          className="admin-menu-btn"
          href="/edit-sweets"
          variant="outline-primary"
        >
          Manage Desserts
        </Button>
      </div>
    </div>
  );
};

export default AdminView;
