import { useState } from "react";

import logo from "../../assets/img/logo.png";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import Profile from "../../components/Profile/Profile";

const infos = [
  {
    avatar: "https://eldesernauta.com/thumbnail.png",
    username: "@eldesernauta",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const NavBar = ({ onLogoClick, onProfileClick }) => {
  const [collapsed, setCollapsed] = useState(true);

  onProfileClick = () => setCollapsed(!collapsed);

  onLogoClick = () => setCollapsed(true);

  return (
    <div className="header">
      <Navbar color="dark" light className="px-0 px-lg-5" fixed="top">
        <NavbarBrand onClick={onLogoClick} className="me-auto">
          <img src={logo} width="150px" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={onProfileClick} className="me-2 text-white" />

        <Collapse isOpen={!collapsed} navbar>
          <Nav
            navbar
            className="w-100 d-flex flex-column flex-wrap justify-content-center gap-3"
          >
            {infos.map((info) => (
              <Profile
                avatar={info.avatar}
                username={info.username}
                bio={info.bio}
                
              />
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
