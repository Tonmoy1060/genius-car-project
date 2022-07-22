import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Registration = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const emailRegRef = useRef("");
  const passRegRef = useRef("");
  const conPassRegRef = useRef("");

  const email = emailRegRef.current.value;
  const pass = passRegRef.current.value;
  const confirm = conPassRegRef.current.value;

  const handleRegister = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(email, pass);
  };

  if (user) {
    navigate("/home");
  }

  return (
    <div className="container w-50 mx-auto ">
      <h1 className="text-center mt-5 mb-4">Please Register</h1>
      <Form onClick={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRegRef}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRegRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={conPassRegRef}
            type="password"
            placeholder="Retype Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>

      </Form>
      <p className="mt-4">
        Already registered?{" "}
        <Link
          to={"/login"}
          className="text-decoration-none pe-auto text-danger"
        >
          Please Login{" "}
        </Link>
      </p>
    </div>
  );
};

export default Registration;
