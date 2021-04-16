import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Label,
  FormGroup,
  Form,
  Button,
} from "reactstrap";
//<Input type="text" name="search" id="search" placeholder="Search" />
import "bootstrap/dist/css/bootstrap.min.css";
export const BottomBar = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1em" }}>
        <a href="https://www.instagram.com/2z_4_me/" target="_blank">
          <img src="https://img.shields.io/badge/Instagram-e4405f?style=flat-square&logo=Instagram&logoColor=white" />
        </a>
        <a href="https://github.com/HyeokjaeLee" target="_blank">
          <img src="https://img.shields.io/badge/Github-F1F1F1?style=flat-square&logo=Github&logoColor=black" />
        </a>
        <a href="mailto:leehyeokjae97@gmail.com" target="_blank">
          <img src="https://img.shields.io/badge/Gmail-ea4335?style=flat-square&logo=Gmail&logoColor=white" />
        </a>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img src="/engLogo.png" alt="Logo" className={styles.logo} />
        <span>© All rights reserved.</span>
      </div>
    </div>
  );
};
export const TobBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div style={{ paddingBottom: "1%", width: "100%" }}>
      <Navbar dark={true} full={true} style={{ backgroundColor: "#343148" }}>
        <NavbarBrand
          href="/"
          className="mr-auto"
          style={{ fontSize: "3vh", color: "#d7c49e" }}
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
    </div>
  );
};
