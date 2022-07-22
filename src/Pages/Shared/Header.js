import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button } from "react-bootstrap";
import {signOut } from 'firebase/auth';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} className="p-2" to="/">
            <img
              src={logo}
              width="200"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link className="ms-3" as={Link} to="home">Home</Nav.Link>
              <Nav.Link className="ms-3" as={Link} to="features">Features</Nav.Link>
              <Nav.Link className="ms-3" as={Link} to="about">About</Nav.Link>
              {
                user ? <Button onClick={handleSignOut}>SignOut</Button>
                :
              <Nav.Link className="ms-4" as={Link} to="login">Login</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
