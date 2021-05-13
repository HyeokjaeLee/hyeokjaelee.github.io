import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Page.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export const Page = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/img/Logo.png" />
      </Head>
      <TobBar />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1em" }}>
        <a href="https://www.instagram.com/2z_4_me/" target="_blank">
          <img src="https://img.shields.io/badge/Instagram-F1354D?style=flat-square&logo=Instagram&logoColor=white" />
        </a>
        <a href="https://github.com/HyeokjaeLee" target="_blank">
          <img src="https://img.shields.io/badge/Github-3B3B3B?style=flat-square&logo=Github&logoColor=white" />
        </a>
        <a href="mailto:leehyeokjae97@gmail.com" target="_blank">
          <img src="https://img.shields.io/badge/Gmail-BE293C?style=flat-square&logo=Gmail&logoColor=white" />
        </a>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src="/img/Logo.png" alt="Logo" className={styles.logo} />
        <span style={{ color: "#d7c49e", fontSize: "15px" }}>
          © All rights reserved.
        </span>
      </div>
    </footer>
  );
};

/*const TobBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Navbar dark={true} className={styles.topbar}>
      <NavbarBrand
        href="/"
        className="mr-auto"
        style={{ fontSize: "3vh", color: "white" }}
      >
        {"<Nagle/>"}
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/posts/">Posts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Demo Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/HyeokjaeLee">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};*/
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const TobBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      dark={true}
      expand="md"
      style={{ width: "100%", backgroundColor: "black" }}
    >
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  );
};
