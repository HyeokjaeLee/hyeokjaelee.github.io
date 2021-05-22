import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Topbar.module.css";

export const TobBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [menu, setMenu] = useState("");
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    if (collapsed) {
      setMenu(styles.menu_arrow_bottom);
    } else {
      setMenu(styles.menu_arrow_right);
    }
  };

  return (
    <Navbar dark className={styles.navbar}>
      <NavbarBrand className={styles.brand} href="/">
        HJ.
      </NavbarBrand>

      <button onClick={toggleNavbar} className={styles.menu}>
        <div style={{ float: "left", marginRight: "1em" }} className={menu}>
          {">"}
        </div>
        MENU
      </button>

      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/Posts/">Posts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/HyeokjaeLee">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
/*  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark={true} expand="md" className={styles.navbar}>
      <NavbarBrand className={styles.brand} href="/">
        HYEOKJAE.
      </NavbarBrand>
      <Nav className="mr-auto" navbar={true} justified={true}>
        <NavItem>
          <NavLink href="/components/">Posts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/HyeokjaeLee">GitHub</NavLink>
        </NavItem>
        <NavLink href="https://github.com/HyeokjaeLee">About</NavLink>
      </Nav>
    </Navbar>
  ); */
