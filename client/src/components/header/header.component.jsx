import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar
          style={{ justifyContent: "right", backgroundColor: "transparent" }}
        >
          <Navbar.Brand href="/" style={{ color: "red" }}>
            Home{" "}
            <i
              className="fas fa-compact-disc fa-spin"
              style={{
                fontSize: 20,
                color: "red"
              }}
            ></i>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="/artists" style={{ color: "red" }}>
              Artists
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "red" }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
