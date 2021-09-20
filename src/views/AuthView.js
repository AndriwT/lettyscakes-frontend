import { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../App.css";

const AuthView = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const redirect = () => {
    history.push("/admin");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user === "Arlettys" && password === "Sebastian1994") {
      redirect();
    } else {
      alert("Wrong Credentials!");
    }
    window.location.reload();
  };

  return (
    <div className="auth-container mt-5 ">
      <Form className="auth-form">
        <h2>Administration Page</h2>
        <p>Please enter credentials</p>
        <FormLabel>UserName</FormLabel>
        <input
          className="form-control"
          type="text"
          placeholder="name"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <FormLabel>Password</FormLabel>
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} className="custom-button">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default AuthView;
