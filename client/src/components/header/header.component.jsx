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
          <Navbar.Brand href="/" style={{
            color: "#4E4E4E"
          }}>
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
            <Nav.Link href="/artists" style={{
              color: "#4E4E4E"
            }} >
              Artists
            </Nav.Link>
            <Nav.Link href="/about" style={{
              color: "#4E4E4E"
            }}>
              About
            </Nav.Link>
            <Nav.Link href="/login" style={{
              color: "#4E4E4E"
            }}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar >
      </div >
    );
  }
}
