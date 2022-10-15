import { useState } from "react";

import logo from "../../assets/img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="header">
      <Navbar color="dark" light className="px-0 px-lg-5">
        <NavbarBrand href="/" className="me-auto">
          <img src={logo} width="150px" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 text-white" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="w-100 d-flex flex-row flex-wrap gap-3">
            <NavItem>
              <NavLink href="#" className="text-white"><img src="https://iwatchfriendsonline.com/wp-content/uploads/2022/04/nvyx1LNbdQbq9xzU9LIuBcNAr2v-185x278.jpg" width="100px"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white"><img src="https://iwatchfriendsonline.com/wp-content/uploads/2022/04/4pKU6MfTjfNZS4RIby4Q3ukguLo-185x278.jpg" width="100px"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white"><img src="https://iwatchfriendsonline.com/wp-content/uploads/2022/04/mHmIOieHNRDWlvtuLqU2jSkWViZ-185x278.jpg" width="100px"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white"><img src="https://iwatchfriendsonline.com/wp-content/uploads/2022/04/kXcjUuAjEHGbV1ZJ0fu267dxJ5I-185x278.jpg" width="100px"/></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white"><img src="https://iwatchfriendsonline.com/wp-content/uploads/2022/04/kiz7JXtVmt6a1hnzXAST74jOMB4-185x278.jpg" width="100px"/></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
