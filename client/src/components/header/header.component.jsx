import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar
          style={{ justifyContent: "right", backgroundColor: "transparent" }}
        >
          <Navbar.Brand href="/" style={{ color: "black" }}>
            Home{" "}
            <i
              className="fas fa-compact-disc fa-spin"
              style={{
                fontSize: 20,
                color: "black"
              }}
            ></i>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="/artists" style={{ color: "black" }}>
              Artists
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "black" }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
