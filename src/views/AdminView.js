import { Button } from "react-bootstrap";

const AdminView = () => {
  return (
    <div className="admin-container">
      <div className="admin-menu">
        <h4>Administration</h4>
        <div className="admin-menu-btns">
          <Button className="custom-button" href="/orders">
            View Orders
          </Button>
          <Button className="custom-button" href="/edit-sweets">
            Manage Desserts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
