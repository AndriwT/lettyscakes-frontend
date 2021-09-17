import { useState } from "react";
import { Button } from "react-bootstrap";
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
    <div className="container mt-5">
      <form className="auth-form">
        <h2>Administration Page</h2>
        <p>Please enter credentials</p>
        <input
          className="form-control"
          type="text"
          placeholder="name"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          className="btn btn-outline-primary"
          variant="outline-primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default AuthView;
