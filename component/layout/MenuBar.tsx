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
  NavbarText,
  UncontrolledCollapse,
} from "reactstrap";

const MyProject: JSX.Element = 
  <ul>
    <li>Webtoon-Hub</li>
    <li>Insider-Trade-Dashboard</li>
    <li>Toy-project-api</li>
  </ul>
;

export const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarBrand href="/">NAGLE</NavbarBrand>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/HyeokjaeLee">Github</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <Toggle name={"MyProject"} item={MyProject} />
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

const Toggle = (props: any) => (
  <div>
    <NavLink id="toggler" href="#">
      {props.name}
    </NavLink>
    <UncontrolledCollapse toggler="#toggler">{props.item}</UncontrolledCollapse>
  </div>
);
