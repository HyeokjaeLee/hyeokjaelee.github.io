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

      <Footer />
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1em" }}>
        <a href="https://www.instagram.com/2z_4_me/" target="_blank">
          <img src="https://img.shields.io/badge/Instagram-d7c49e?style=flat-square&logo=Instagram&logoColor=343148" />
        </a>
        <a href="https://github.com/HyeokjaeLee" target="_blank">
          <img src="https://img.shields.io/badge/Github-d7c49e?style=flat-square&logo=Github&logoColor=343148" />
        </a>
        <a href="mailto:leehyeokjae97@gmail.com" target="_blank">
          <img src="https://img.shields.io/badge/Gmail-d7c49e?style=flat-square&logo=Gmail&logoColor=343148" />
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

const TobBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div style={{ paddingBottom: "1%", width: "100%" }}>
      <Navbar light={true} full={true} style={{ backgroundColor: "#F0EDCC" }}>
        <NavbarBrand
          href="/"
          className="mr-auto"
          style={{ fontSize: "3vh", color: "#02343F" }}
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
