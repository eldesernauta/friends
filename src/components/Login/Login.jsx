import { useState } from "react";
import { Container } from "reactstrap";
import { login } from "../../service/data-service";

const Login = ({ setToken }) => {
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <Container className="container py-5 d-flex flex-column gap-5 justify-content-center align-items-center">
      <div className="col-12 col-md-4">
        <form className="w-100" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="form-control mb-3"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="password"
          />
          <button type="submit" className="btn btn-dark mx-auto w-100">
            Login
          </button>
          {error && <div className="mt-5 text-center alert alert-danger">{error}</div>}
        </form>
      </div>
    </Container>
  );
};

export default Login;
