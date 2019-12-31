import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./header.styles.scss"

export default class Header extends Component {
  render() {
    return (
      <div style={{}}>
        <Navbar
          style={{ justifyContent: "right", backgroundColor: "transparent" }}
        >
          <Navbar.Brand href="/" style={{ color: "#A9A9A9" }}>
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
            <Nav.Link href="/artists"  >
              Artists
            </Nav.Link>
            <Nav.Link href="/about" >
              About
            </Nav.Link>
            <Nav.Link href="/login" >
              Login
            </Nav.Link>
          </Nav>
        </Navbar >
      </div >
    );
  }
}
