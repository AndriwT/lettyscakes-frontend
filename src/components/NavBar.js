import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";

const link = {
  textDecoration: "none",
  color: "white",
  marginLeft: "20px",
  fontSize: "20px",
  border: "2px black",
  padding: "5px",
  borderRadius: "10px",
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container>
        <img
          alt=""
          src="/IMG_1231.PNG"
          width="70"
          height="70"
          className="d-inline-block align-top"
          style={{ borderRadius: "50px" }}
        />
        {/* <Navbar.Brand href="#home">Letty's Cakes</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={link}>
              Home
            </Link>
            <Link to="/sweets" style={link}>
              Desserts
            </Link>
          </Nav>
          <Nav>
            <Link to="/order" style={link}>
              Place Order
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
