import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../service/data-service";

const token = localStorage.getItem("token");

const Login = ({ setToken }) => {
  const [err, setErr] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
      })
      .catch((err) => {
        setErr(err.response.data.message);
      });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
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
        {err && (
          <div className="mt-5 text-center alert alert-danger">{err}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
