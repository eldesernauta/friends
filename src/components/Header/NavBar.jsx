import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/NavBar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import profile from "../../assets/img/profile.svg";
import { Navbar } from "reactstrap";

const token = localStorage.getItem("token");

const NavBar = ({ onLogoClick, onProfileClick }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    localStorage.clearToken();
    navigate("/login");
    if (localStorage.getItem()) {
      window.location.reload();
    }
    return "you were logout";
  };

  return (
    <div className="header">
      <Navbar color="dark" light className="px-0 px-lg-5" fixed="top">
        <Link className="me-auto" to="/episodes">
          <img id="logo" src={logo} width="150px" alt="logo" />
        </Link>
        {token ? (
          <>
            <Link
              id="logout"
              className="login mx-3 text-white text-decoration-none"
              onClick={logout}
            >
              Logout
            </Link>
            <Link className="profile-icon" to="/profile">
              <img
                src={profile}
                className="comment-icon"
                alt="comment-icon"
                width="40px"
              />
            </Link>
          </>
        ) : (
          <Link
            className="login mx-3 text-white text-decoration-none"
            to="/login"
          >
            Login
          </Link>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
