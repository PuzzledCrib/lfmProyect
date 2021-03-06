import React from "react";
import "./App.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <Navbar variant="tabs" fixed="top">
        <Navbar.Brand href="/" className="ml-5">
          LFM
        </Navbar.Brand>
        <NavDropdown title="Sobre mí " id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
            <Link to="/habilidades">Habilidades</Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.2">
            <Link to="/cualidades">Cualidades</Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.3">
            <Link to="/capacidades">Capacidades</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="1" href="/trabajos">
            Trabajos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" href="/contacto">
            Contacto
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </header>
  );
}

export default NavBar;
